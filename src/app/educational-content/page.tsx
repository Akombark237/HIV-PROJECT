'use client';

import { useState } from 'react';
import { 
  BookOpen, 
  Shield, 
  Heart, 
  FileText, 
  Download, 
  Play, 
  Eye, 
  EyeOff,
  Search,
  Filter,
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Info,
  Lock,
  Users,
  Globe,
  Star,
  Clock,
  Award,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Headphones,
  Video,
  Image as ImageIcon,
  ExternalLink
} from 'lucide-react';

type ContentCategory = 'all' | 'gbv-prevention' | 'hiv-education' | 'rights-awareness' | 'safety-planning';

interface EducationalContent {
  id: string;
  title: string;
  category: ContentCategory;
  type: 'article' | 'video' | 'audio' | 'infographic' | 'guide' | 'interactive';
  description: string;
  content?: string;
  duration?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  languages: string[];
  tags: string[];
  downloadUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  imageUrl?: string;
  author: string;
  datePublished: string;
  rating: number;
  views: number;
  bookmarked: boolean;
  featured: boolean;
}

const EducationalContentPage = () => {
  const [activeCategory, setActiveCategory] = useState<ContentCategory>('all');
  const [selectedContent, setSelectedContent] = useState<EducationalContent | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [showPrivacyMode, setShowPrivacyMode] = useState(false);

  const educationalContent: EducationalContent[] = [
    {
      id: '1',
      title: 'Understanding Gender-Based Violence: Types and Warning Signs',
      category: 'gbv-prevention',
      type: 'article',
      description: 'Comprehensive guide to recognizing different forms of GBV and early warning signs',
      content: 'Gender-based violence encompasses physical, sexual, emotional, and economic abuse...',
      duration: '15 min read',
      difficulty: 'beginner',
      languages: ['English', 'Hausa', 'Fulfulde'],
      tags: ['GBV Types', 'Warning Signs', 'Prevention', 'Awareness'],
      downloadUrl: '/content/gbv-understanding.pdf',
      author: 'Dr. Amina Hassan, GBV Specialist',
      datePublished: '2024-06-01',
      rating: 4.8,
      views: 1250,
      bookmarked: false,
      featured: true
    },
    {
      id: '2',
      title: 'HIV Basics: What Every Person Should Know',
      category: 'hiv-education',
      type: 'video',
      description: 'Educational video covering HIV transmission, prevention, and treatment basics',
      duration: '12 minutes',
      difficulty: 'beginner',
      languages: ['English', 'Hausa', 'Fulfulde', 'Kanuri'],
      tags: ['HIV Basics', 'Prevention', 'Treatment', 'Myths'],
      videoUrl: '/content/hiv-basics-video.mp4',
      author: 'Federal Medical Centre Yola',
      datePublished: '2024-05-28',
      rating: 4.9,
      views: 2100,
      bookmarked: true,
      featured: true
    },
    {
      id: '3',
      title: 'Know Your Rights: Legal Protections for GBV Survivors',
      category: 'rights-awareness',
      type: 'guide',
      description: 'Detailed guide on legal rights and protections available to GBV survivors in Nigeria',
      duration: '20 min read',
      difficulty: 'intermediate',
      languages: ['English', 'Hausa'],
      tags: ['Legal Rights', 'Protection', 'Court Process', 'Support'],
      downloadUrl: '/content/legal-rights-guide.pdf',
      author: 'Legal Aid Council Nigeria',
      datePublished: '2024-06-10',
      rating: 4.7,
      views: 890,
      bookmarked: false,
      featured: false
    },
    {
      id: '4',
      title: 'Personal Safety Planning: Creating Your Emergency Plan',
      category: 'safety-planning',
      type: 'interactive',
      description: 'Interactive tool to help create personalized safety plans for various situations',
      duration: '30 minutes',
      difficulty: 'intermediate',
      languages: ['English', 'Hausa', 'Fulfulde'],
      tags: ['Safety Planning', 'Emergency', 'Personal Security', 'Crisis'],
      author: 'WRAPA Safety Team',
      datePublished: '2024-06-15',
      rating: 4.6,
      views: 750,
      bookmarked: true,
      featured: true
    },
    {
      id: '5',
      title: 'HIV and Pregnancy: Protecting Mother and Child',
      category: 'hiv-education',
      type: 'infographic',
      description: 'Visual guide on HIV prevention during pregnancy and protecting newborns',
      duration: '5 min view',
      difficulty: 'beginner',
      languages: ['English', 'Hausa', 'Fulfulde'],
      tags: ['PMTCT', 'Pregnancy', 'Mother-to-Child', 'Prevention'],
      imageUrl: '/content/hiv-pregnancy-infographic.png',
      downloadUrl: '/content/hiv-pregnancy-infographic.pdf',
      author: 'UNICEF Nigeria',
      datePublished: '2024-06-05',
      rating: 4.5,
      views: 1100,
      bookmarked: false,
      featured: false
    },
    {
      id: '6',
      title: 'Breaking the Silence: Speaking Out Against GBV',
      category: 'gbv-prevention',
      type: 'audio',
      description: 'Audio discussion on community approaches to preventing gender-based violence',
      duration: '25 minutes',
      difficulty: 'intermediate',
      languages: ['English', 'Hausa', 'Fulfulde'],
      tags: ['Community Action', 'Prevention', 'Advocacy', 'Awareness'],
      audioUrl: '/content/breaking-silence-audio.mp3',
      author: 'Community Leaders Forum',
      datePublished: '2024-06-12',
      rating: 4.4,
      views: 650,
      bookmarked: false,
      featured: false
    },
    {
      id: '7',
      title: 'Digital Safety for GBV Survivors',
      category: 'safety-planning',
      type: 'guide',
      description: 'Comprehensive guide on maintaining digital privacy and safety online',
      duration: '18 min read',
      difficulty: 'advanced',
      languages: ['English', 'Hausa'],
      tags: ['Digital Safety', 'Privacy', 'Online Security', 'Technology'],
      downloadUrl: '/content/digital-safety-guide.pdf',
      author: 'Cyber Security Nigeria',
      datePublished: '2024-06-08',
      rating: 4.7,
      views: 420,
      bookmarked: true,
      featured: false
    },
    {
      id: '8',
      title: 'Understanding Consent and Healthy Relationships',
      category: 'rights-awareness',
      type: 'video',
      description: 'Educational content on consent, healthy relationships, and personal boundaries',
      duration: '18 minutes',
      difficulty: 'beginner',
      languages: ['English', 'Hausa', 'Fulfulde'],
      tags: ['Consent', 'Relationships', 'Boundaries', 'Respect'],
      videoUrl: '/content/consent-relationships-video.mp4',
      author: 'Women\'s Rights Nigeria',
      datePublished: '2024-06-03',
      rating: 4.8,
      views: 1350,
      bookmarked: false,
      featured: true
    }
  ];

  const categories = [
    { id: 'all' as const, label: 'All Content', icon: BookOpen },
    { id: 'gbv-prevention' as const, label: 'GBV Prevention', icon: Shield },
    { id: 'hiv-education' as const, label: 'HIV Education', icon: Heart },
    { id: 'rights-awareness' as const, label: 'Rights Awareness', icon: FileText },
    { id: 'safety-planning' as const, label: 'Safety Planning', icon: Lock }
  ];

  const filteredContent = educationalContent.filter(content => {
    const matchesCategory = activeCategory === 'all' || content.category === activeCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredContent = educationalContent.filter(content => content.featured);

  const ContentCard = ({ content }: { content: EducationalContent }) => (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
      onClick={() => setSelectedContent(content)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{content.title}</h3>
            {content.featured && (
              <Award className="w-5 h-5 text-yellow-500" aria-label="Featured Content" />
            )}
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              content.type === 'video' ? 'bg-red-100 text-red-800' :
              content.type === 'audio' ? 'bg-green-100 text-green-800' :
              content.type === 'interactive' ? 'bg-purple-100 text-purple-800' :
              content.type === 'infographic' ? 'bg-blue-100 text-blue-800' :
              content.type === 'guide' ? 'bg-orange-100 text-orange-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
            </span>
            <span className={`px-2 py-1 rounded-lg text-xs ${
              content.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
              content.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {content.difficulty}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <button 
            className={`p-2 rounded-lg transition-colors ${
              content.bookmarked ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <Bookmark className="w-5 h-5" />
          </button>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{content.description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{content.duration}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Globe className="w-4 h-4" />
          <span>{content.languages.join(', ')}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Eye className="w-4 h-4" />
          <span>{content.views.toLocaleString()} views</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium text-gray-700">{content.rating}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {content.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
              {tag}
            </span>
          ))}
          {content.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
              +{content.tags.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (selectedContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedContent(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 text-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Content</span>
          </button>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{selectedContent.title}</h1>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Bookmark className="w-6 h-6" />
                  </button>
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                    <Share2 className="w-6 h-6" />
                  </button>
                  {selectedContent.downloadUrl && (
                    <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg">
                      <Download className="w-6 h-6" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedContent.type === 'video' ? 'bg-red-100 text-red-800' :
                  selectedContent.type === 'audio' ? 'bg-green-100 text-green-800' :
                  selectedContent.type === 'interactive' ? 'bg-purple-100 text-purple-800' :
                  selectedContent.type === 'infographic' ? 'bg-blue-100 text-blue-800' :
                  selectedContent.type === 'guide' ? 'bg-orange-100 text-orange-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {selectedContent.type.charAt(0).toUpperCase() + selectedContent.type.slice(1)}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-medium text-gray-700">{selectedContent.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{selectedContent.views.toLocaleString()} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{selectedContent.duration}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">{selectedContent.description}</p>
            </div>

            {/* Content Display Area */}
            <div className="mb-6 p-6 bg-gray-50 rounded-2xl">
              {selectedContent.type === 'video' && (
                <div className="text-center">
                  <Video className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-700 mb-4">Video content would be displayed here</p>
                  <button className="bg-red-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-600 transition-colors">
                    Play Video
                  </button>
                </div>
              )}

              {selectedContent.type === 'audio' && (
                <div className="text-center">
                  <Headphones className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-700 mb-4">Audio content would be displayed here</p>
                  <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors">
                    Play Audio
                  </button>
                </div>
              )}

              {selectedContent.type === 'infographic' && (
                <div className="text-center">
                  <ImageIcon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-700 mb-4">Infographic would be displayed here</p>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors">
                    View Full Size
                  </button>
                </div>
              )}

              {selectedContent.type === 'interactive' && (
                <div className="text-center">
                  <Users className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <p className="text-gray-700 mb-4">Interactive tool would be embedded here</p>
                  <button className="bg-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-600 transition-colors">
                    Start Interactive Tool
                  </button>
                </div>
              )}

              {(selectedContent.type === 'article' || selectedContent.type === 'guide') && (
                <div>
                  <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedContent.content || 'Full article content would be displayed here with proper formatting, headings, and sections.'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Content Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900">Author</p>
                    <p className="text-gray-700">{selectedContent.author}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Published</p>
                    <p className="text-gray-700">{new Date(selectedContent.datePublished).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Languages</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedContent.languages.map((lang, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-lg">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Difficulty Level</p>
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      selectedContent.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                      selectedContent.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {selectedContent.difficulty.charAt(0).toUpperCase() + selectedContent.difficulty.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedContent.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educational Content
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive educational resources on GBV prevention, HIV education, rights awareness, and safety planning
          </p>
        </div>

        {/* Privacy Mode Toggle */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowPrivacyMode(!showPrivacyMode)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                  showPrivacyMode ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {showPrivacyMode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                <span>Privacy Mode</span>
              </button>
              <button
                onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                  isAudioEnabled ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isAudioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                <span>Audio Descriptions</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search educational content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all text-lg ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Content */}
        {activeCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredContent.map((content) => (
                <ContentCard key={content.id} content={content} />
              ))}
            </div>
          </div>
        )}

        {/* All Content */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {activeCategory === 'all' ? 'All Educational Content' :
             categories.find(cat => cat.id === activeCategory)?.label}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        </div>

        {/* Content Categories Overview */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Educational Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">GBV Prevention</h4>
              <p className="text-gray-600">Information on preventing gender-based violence and recognizing warning signs</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">HIV Education</h4>
              <p className="text-gray-600">Comprehensive HIV education materials covering prevention, treatment, and care</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Rights Awareness</h4>
              <p className="text-gray-600">Information about legal rights and protections for survivors</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-2">Safety Planning</h4>
              <p className="text-gray-600">Guides and tools for creating personal safety and emergency plans</p>
            </div>
          </div>
        </div>

        {/* Safety Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Privacy and Safety Notice</h3>
              <p className="text-yellow-700">
                All educational content is designed with your privacy and safety in mind. Use Privacy Mode when accessing
                sensitive content, and remember that you can quickly exit this page using the emergency exit feature if needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalContentPage;
