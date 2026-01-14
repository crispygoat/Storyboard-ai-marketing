import './globals.css';

export const metadata = {
  title: 'Storyboard AI Tool - AI-Powered Visual Storytelling',
  description: 'Transform your scripts into stunning visual storyboards with AI. Generate professional storyboards in minutes, not hours.',
};

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-blur"></div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">
            <div className="logo-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            Storyboard AI Tool
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#workflow">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="https://storyboardaitool.lemonsqueezy.com/checkout/buy/dd882149-ab0b-4637-9a49-763d6f82ba2f" className="btn btn-primary">Get License</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot"></span>
            AI-Powered Storyboarding
          </div>
          <h1>
            Transform Your Scripts Into<br/>
            <span className="hero-gradient-text">Stunning Visual Storyboards</span>
          </h1>
          <p className="hero-subtitle">
            Generate professional storyboards in minutes, not hours. Connect to any AI image provider,
            work online or offline, and bring your creative vision to life.
          </p>
          <div className="hero-cta">
            <a href="https://storyboardaitool.lemonsqueezy.com/checkout/buy/dd882149-ab0b-4637-9a49-763d6f82ba2f" className="btn btn-primary btn-large">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Buy Lifetime License - $49
            </a>
            <a href="#features" className="btn btn-secondary btn-large">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">10+</div>
              <div className="stat-label">AI Providers</div>
            </div>
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Offline Capable</div>
            </div>
            <div className="stat">
              <div className="stat-value">2</div>
              <div className="stat-label">Device Activations</div>
            </div>
            <div className="stat">
              <div className="stat-value">$0</div>
              <div className="stat-label">Monthly Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section className="demo-section">
        <div className="demo-container">
          <div className="demo-header">
            <div className="demo-dot red"></div>
            <div className="demo-dot yellow"></div>
            <div className="demo-dot green"></div>
          </div>
          <div className="demo-content">
            <div className="demo-grid">
              <div className="demo-frame">
                <div className="demo-frame-image">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="demo-frame-content">
                  <div className="demo-frame-title">Frame 1: Opening Shot</div>
                  <div className="demo-frame-desc">Wide establishing shot of the cityscape at dawn.</div>
                </div>
              </div>
              <div className="demo-frame">
                <div className="demo-frame-image">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="demo-frame-content">
                  <div className="demo-frame-title">Frame 2: Character Intro</div>
                  <div className="demo-frame-desc">Medium shot of protagonist walking through the streets.</div>
                </div>
              </div>
              <div className="demo-frame">
                <div className="demo-frame-image">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="demo-frame-content">
                  <div className="demo-frame-title">Frame 3: Close-up</div>
                  <div className="demo-frame-desc">Close-up on the mysterious object in their hand.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2>Everything You Need to Create Professional Storyboards</h2>
          <p className="section-subtitle">Powerful AI tools designed for filmmakers, animators, and creative professionals.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3>AI-Powered Generation</h3>
            <p>Enter your script or story description and watch as AI transforms your words into stunning visual frames automatically.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3>Multiple AI Providers</h3>
            <p>Connect to 10+ image generation providers including OpenAI DALL-E, Stability AI, Replicate, FAL AI, and local Stable Diffusion.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3>Work Offline</h3>
            <p>Run Stable Diffusion locally with AUTOMATIC1111 or ComfyUI. No internet required, complete privacy for your projects.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3>Video Generation</h3>
            <p>Transform your storyboard frames into short videos with Runway Gen-3, Luma Dream Machine, or local ComfyUI AnimateDiff.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <h3>Regenerate & Iterate</h3>
            <p>Not happy with a frame? Regenerate with one click, upscale to hi-res, or browse through your generation history.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3>Export Options</h3>
            <p>Export your storyboard as a professional PDF document or download all frames as high-quality PNG, JPG, or WebP images.</p>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="providers">
        <div className="section-header">
          <span className="section-label">Integrations</span>
          <h2>Connect to Your Favorite AI Providers</h2>
          <p className="section-subtitle">Use your own API keys and pay only for what you generate. No middleman fees.</p>
        </div>
        <div className="providers-grid">
          <div className="provider-card">
            <div className="provider-icon">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z"/>
              </svg>
            </div>
            <h4>OpenAI DALL-E</h4>
            <p>GPT-Image-1 & DALL-E 3</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
            <h4>Stability AI</h4>
            <p>SDXL & SD3</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
              </svg>
            </div>
            <h4>Replicate</h4>
            <p>Flux & Custom Models</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h4>FAL AI</h4>
            <p>Fast Inference</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h4>AUTOMATIC1111</h4>
            <p>Local SD WebUI</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
              </svg>
            </div>
            <h4>ComfyUI</h4>
            <p>Advanced Workflows</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </div>
            <h4>Runway</h4>
            <p>Gen-3 Video</p>
          </div>
          <div className="provider-card">
            <div className="provider-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4>Luma</h4>
            <p>Dream Machine</p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="workflow">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2>From Script to Storyboard in 3 Simple Steps</h2>
          <p className="section-subtitle">Our streamlined workflow makes professional storyboarding accessible to everyone.</p>
        </div>
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Write Your Story</h3>
              <p>Enter your script, scene descriptions, or story outline. Describe the visual elements, characters, and atmosphere you want to capture. The AI understands context and creative direction.</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Generate Frames</h3>
              <p>Click generate and watch as AI creates stunning visual frames for each scene. Review the generated images, regenerate any frames you&apos;d like to refine, and iterate until perfect.</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Export & Share</h3>
              <p>Export your completed storyboard as a professional PDF for client presentations, or download all frames as high-quality images. Optionally generate videos from your favorite frames.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="section-header">
          <span className="section-label">Pricing</span>
          <h2>Simple, Transparent Pricing</h2>
          <p className="section-subtitle">One price. Lifetime access. No subscriptions or hidden fees.</p>
        </div>
        <div className="pricing-card">
          <div className="pricing-badge">Lifetime License</div>
          <h3 className="pricing-title">Storyboard AI Tool</h3>
          <p className="pricing-subtitle">Everything you need to create professional storyboards</p>
          <div className="pricing-price">
            <span className="price-amount">$49</span>
            <span className="price-period">one-time</span>
            <span className="price-note">No monthly or yearly fees. Ever.</span>
          </div>
          <div className="pricing-features">
            <div className="pricing-feature">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Unlimited storyboards</span>
            </div>
            <div className="pricing-feature">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>All AI providers (online & offline)</span>
            </div>
            <div className="pricing-feature">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>2 device activations</span>
            </div>
            <div className="pricing-feature">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Free lifetime updates</span>
            </div>
            <div className="pricing-feature">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Local Stable Diffusion support</span>
            </div>
            <div className="pricing-feature">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Video generation from frames</span>
            </div>
            <div className="pricing-feature">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>PDF & image export</span>
            </div>
            <div className="pricing-feature">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Desktop app (Windows, Mac, Linux)</span>
            </div>
          </div>
          <a href="https://storyboardaitool.lemonsqueezy.com/checkout/buy/dd882149-ab0b-4637-9a49-763d6f82ba2f" className="btn btn-primary btn-large pricing-cta">
            Get Your License Now
          </a>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <div className="testimonial-content">
          <p className="testimonial-quote">
            &quot;Storyboard AI Tool has completely transformed my pre-production workflow.
            What used to take days now takes hours. The ability to use my own local
            Stable Diffusion setup means I have complete control over my creative vision.&quot;
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">JM</div>
            <div className="testimonial-info">
              <h4>James Mitchell</h4>
              <p>Independent Filmmaker</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Storytelling?</h2>
          <p>Join creators who are using AI to bring their visual stories to life faster than ever before.</p>
          <a href="https://storyboardaitool.lemonsqueezy.com/checkout/buy/dd882149-ab0b-4637-9a49-763d6f82ba2f" className="btn btn-primary btn-large">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Get Storyboard AI Tool - $49
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <a href="#" className="logo">
            <div className="logo-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            Storyboard AI Tool
          </a>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#workflow">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="mailto:support@storyboardaitool.com">Support</a>
          </div>
          <p className="footer-copyright">&copy; 2025 Storyboard AI Tool. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
