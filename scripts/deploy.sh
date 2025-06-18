#!/bin/bash

# HIV Crisis Support Platform - Deployment Script
# This script handles deployment to various platforms

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="HIV Crisis Support - Cameroon"
VERSION=$(node -p "require('./package.json').version")
BUILD_DIR=".next"
DIST_DIR="out"

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
    log_info "Checking prerequisites..."
    
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
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        log_error "package.json not found. Are you in the project root?"
        exit 1
    fi
    
    log_success "Prerequisites check passed"
}

# Install dependencies
install_dependencies() {
    log_info "Installing dependencies..."
    npm ci
    log_success "Dependencies installed"
}

# Run quality checks
run_quality_checks() {
    log_info "Running quality checks..."
    
    # Type checking
    log_info "Running TypeScript type checking..."
    npm run type-check
    
    # Linting
    log_info "Running ESLint..."
    npm run lint
    
    # Security audit
    log_info "Running security audit..."
    npm audit --audit-level=moderate
    
    log_success "Quality checks passed"
}

# Build application
build_application() {
    log_info "Building application..."
    
    # Clean previous builds
    if [ -d "$BUILD_DIR" ]; then
        rm -rf "$BUILD_DIR"
        log_info "Cleaned previous build directory"
    fi
    
    if [ -d "$DIST_DIR" ]; then
        rm -rf "$DIST_DIR"
        log_info "Cleaned previous dist directory"
    fi
    
    # Build
    npm run build
    
    # Generate sitemap
    npm run postbuild
    
    log_success "Application built successfully"
}

# Deploy to Vercel
deploy_vercel() {
    log_info "Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        log_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    # Deploy
    if [ "$1" == "production" ]; then
        vercel --prod --yes
    else
        vercel --yes
    fi
    
    log_success "Deployed to Vercel"
}

# Deploy to Netlify
deploy_netlify() {
    log_info "Deploying to Netlify..."
    
    if ! command -v netlify &> /dev/null; then
        log_warning "Netlify CLI not found. Installing..."
        npm install -g netlify-cli
    fi
    
    # Build for static export
    npm run export
    
    # Deploy
    if [ "$1" == "production" ]; then
        netlify deploy --prod --dir="$DIST_DIR"
    else
        netlify deploy --dir="$DIST_DIR"
    fi
    
    log_success "Deployed to Netlify"
}

# Create deployment package
create_package() {
    log_info "Creating deployment package..."
    
    PACKAGE_NAME="hiv-crisis-support-v${VERSION}.tar.gz"
    
    tar -czf "$PACKAGE_NAME" \
        --exclude=node_modules \
        --exclude=.git \
        --exclude=.next \
        --exclude=out \
        --exclude="*.tar.gz" \
        .
    
    log_success "Package created: $PACKAGE_NAME"
}

# Health check
health_check() {
    local url=$1
    log_info "Running health check on $url..."
    
    # Wait a bit for deployment to be ready
    sleep 30
    
    # Check if site is accessible
    if curl -f -s "$url" > /dev/null; then
        log_success "Health check passed"
    else
        log_error "Health check failed"
        exit 1
    fi
}

# Main deployment function
deploy() {
    local platform=$1
    local environment=${2:-staging}
    
    log_info "Starting deployment of $PROJECT_NAME v$VERSION"
    log_info "Platform: $platform"
    log_info "Environment: $environment"
    
    check_prerequisites
    install_dependencies
    run_quality_checks
    build_application
    
    case $platform in
        "vercel")
            deploy_vercel "$environment"
            ;;
        "netlify")
            deploy_netlify "$environment"
            ;;
        "package")
            create_package
            ;;
        "all")
            deploy_vercel "$environment"
            deploy_netlify "$environment"
            ;;
        *)
            log_error "Unknown platform: $platform"
            log_info "Available platforms: vercel, netlify, package, all"
            exit 1
            ;;
    esac
    
    log_success "Deployment completed successfully!"
}

# Help function
show_help() {
    echo "HIV Crisis Support Platform - Deployment Script"
    echo ""
    echo "Usage: $0 <platform> [environment]"
    echo ""
    echo "Platforms:"
    echo "  vercel    - Deploy to Vercel"
    echo "  netlify   - Deploy to Netlify"
    echo "  package   - Create deployment package"
    echo "  all       - Deploy to all platforms"
    echo ""
    echo "Environments:"
    echo "  staging     - Deploy to staging (default)"
    echo "  production  - Deploy to production"
    echo ""
    echo "Examples:"
    echo "  $0 vercel production"
    echo "  $0 netlify staging"
    echo "  $0 all production"
    echo "  $0 package"
}

# Main script
if [ $# -eq 0 ]; then
    show_help
    exit 1
fi

case $1 in
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        deploy "$1" "$2"
        ;;
esac
