import './App.css';
import './index.css';

function App() {

  // SVG Icon For X
  const XLogo = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="x-logo">
      <g>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </g>
    </svg>
  );

  // SVG Icon for Google
  const GoogleLogo = () => (
    <svg viewBox="0 0 48 48" className="google-logo">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"></path>
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 35.245 44 30.028 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
  );

  // SVG Icon for Apple
  const AppleLogo = () => (
    <svg className="apple-logo" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.224 9.13c-.02-2.88-2.08-4.51-4.22-4.53-2.22-.02-4.32 1.33-5.5 1.33-1.15 0-3-1.4-4.68-1.38-2.1.03-3.93 1.62-4.95 3.9-.98 2.23-.43 5.4 1.18 7.45.95 1.2 2.1 2.53 3.58 2.5 1.48-.02 2.05-1 3.88-1s2.23.95 3.88.95c1.68 0 2.85-1.2 3.73-2.42.85-1.18 1.12-2.48.9-3.8zM15.4 3.23c1.08-.02 2.43.55 3.23 1.35-1.28 1.05-2.08 2.73-1.95 4.35.2 2.45 2.28 3.78 4.6 3.75-0.1 1.58-.8 3.18-2.12 4.25-1.4 1.15-2.98 1.85-4.58 1.82-1.78-.05-2.93-1-4.3-1s-2.42.95-4.15.98c-1.65 0-3.35-.9-4.4-2.3-2.4-3.2-2.7-7.4-.9-10.35C6.5.95 8.95 0 11.5 0c1.55 0 3.05.75 4.02 1.65.22-.15.47-.3.7-.42z"></path>
    </svg>
  );
  
  return (
    <div className="App">
      <div className='form-box'>
        <XLogo />
        <h2>Sign in to X</h2>

        <button className='social-btn google'>
          <GoogleLogo />
          Sign in with Google
        </button>

        <button className='social-btn apple'>
          <AppleLogo />
          Sign in with Apple
        </button>

        <div className='divider'>
          <hr />
          <span>Or</span>
          <hr />
        </div>

        <form>
          <div className='input-wrapper'>
            <input type='text' id='username' required/>
            <label htmlFor='username'>Phone, Email or Username</label>
          </div>

          <button className='primary-btn'>Next</button>
        </form>

        <button className='secondary-btn'>Forgot Passsword</button>
        <p className='signup-link'>Don't have an acccount? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
}

export default App;
