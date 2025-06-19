#!/bin/bash

# HIV Crisis Support Platform - Render Deployment Script
# This script helps deploy the application to Render.com

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="HIV Crisis Support - Cameroon"
RENDER_SERVICE_NAME="hiv-crisis-support-cameroon"

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log_info "Checking prerequisites for Render deployment..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed"
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed"
        exit 1
    fi
    
    # Check Git
    if ! command -v git &> /dev/null; then
        log_error "Git is not installed"
        exit 1
    fi
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        log_error "package.json not found. Are you in the project root?"
        exit 1
    fi
    
    # Check if render.yaml exists
    if [ ! -f "render.yaml" ]; then
        log_error "render.yaml not found. Please ensure Render configuration exists."
        exit 1
    fi
    
    log_success "Prerequisites check passed"
}

# Validate environment configuration
validate_environment() {
    log_info "Validating environment configuration..."
    
    # Check if .env.render exists
    if [ ! -f ".env.render" ]; then
        log_warning ".env.render not found. Creating from template..."
        cp .env.example .env.render
    fi
    
    # Validate critical environment variables
    local required_vars=(
        "NEXT_PUBLIC_EMERGENCY_POLICE"
        "NEXT_PUBLIC_EMERGENCY_MEDICAL"
        "NEXT_PUBLIC_CRISIS_HOTLINE"
    )
    
    for var in "${required_vars[@]}"; do
        if ! grep -q "^${var}=" .env.render; then
            log_error "Required environment variable ${var} not found in .env.render"
            exit 1
        fi
    done
    
    log_success "Environment validation passed"
}

# Run pre-deployment checks
run_pre_deployment_checks() {
    log_info "Running pre-deployment checks..."
    
    # Install dependencies
    log_info "Installing dependencies..."
    npm ci
    
    # Type checking
    log_info "Running TypeScript type checking..."
    npm run type-check
    
    # Linting
    log_info "Running ESLint..."
    npm run lint
    
    # Build test
    log_info "Testing build process..."
    npm run build
    
    # Health check test (if server is running)
    if curl -f http://localhost:3000/api/health &> /dev/null; then
        log_info "Health check endpoint is working"
    else
        log_warning "Health check endpoint not accessible (server may not be running)"
    fi
    
    log_success "Pre-deployment checks passed"
}

# Prepare for Render deployment
prepare_render_deployment() {
    log_info "Preparing for Render deployment..."
    
    # Ensure all changes are committed
    if [ -n "$(git status --porcelain)" ]; then
        log_warning "You have uncommitted changes. Committing them now..."
        git add .
        git commit -m "🚀 Prepare for Render deployment

- Updated Render configuration
- Added health check endpoint
- Configured environment variables
- Ready for production deployment"
    fi
    
    # Check if we're on the main branch
    current_branch=$(git branch --show-current)
    if [ "$current_branch" != "main" ]; then
        log_warning "You're not on the main branch. Render deploys from main by default."
        read -p "Do you want to switch to main branch? (y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git checkout main
            git merge "$current_branch"
        fi
    fi
    
    log_success "Render deployment preparation complete"
}

# Deploy to Render
deploy_to_render() {
    log_info "Deploying to Render..."
    
    # Push to GitHub (Render will auto-deploy)
    log_info "Pushing to GitHub repository..."
    git push origin main
    
    log_success "Code pushed to GitHub. Render will automatically deploy."
    log_info "Monitor your deployment at: https://dashboard.render.com"
}

# Show post-deployment instructions
show_post_deployment_instructions() {
    echo ""
    log_success "Deployment initiated successfully!"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Go to https://dashboard.render.com"
    echo "2. Monitor your deployment progress"
    echo "3. Set up environment variables in Render dashboard:"
    echo "   - NEXTAUTH_SECRET (generate with: openssl rand -base64 32)"
    echo "   - NEXT_PUBLIC_APP_URL (your Render app URL)"
    echo "4. Test your deployed application"
    echo "5. Configure custom domain (optional)"
    echo ""
    echo "🔧 Environment Variables to Set in Render:"
    echo "   Copy from .env.render file to Render dashboard"
    echo ""
    echo "📞 Emergency Services (Cameroon):"
    echo "   - Police: 117"
    echo "   - Medical: 115"
    echo "   - Fire: 118"
    echo "   - Crisis Hotline: +237-75-627-8901"
    echo ""
    echo "🏥 Your HIV Crisis Support Platform will be live soon!"
}

# Main deployment function
deploy() {
    log_info "Starting Render deployment for $PROJECT_NAME"
    
    check_prerequisites
    validate_environment
    run_pre_deployment_checks
    prepare_render_deployment
    deploy_to_render
    show_post_deployment_instructions
}

# Help function
show_help() {
    echo "HIV Crisis Support Platform - Render Deployment Script"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  deploy    - Deploy to Render (default)"
    echo "  check     - Run pre-deployment checks only"
    echo "  prepare   - Prepare for deployment without deploying"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 deploy"
    echo "  $0 check"
    echo "  $0 prepare"
}

# Main script
case "${1:-deploy}" in
    "deploy")
        deploy
        ;;
    "check")
        check_prerequisites
        validate_environment
        run_pre_deployment_checks
        ;;
    "prepare")
        check_prerequisites
        validate_environment
        prepare_render_deployment
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        log_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac
