import Link from 'next/link';

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="sidebar w-full md:w-64 shrink-0 border-r border-border p-4">
          <nav className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Getting Started</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/components#installation" 
                    className="text-secondary-foreground hover:text-primary transition-colors block py-1 font-bold"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Components</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/components#slider" 
                    className="text-secondary-foreground hover:text-primary transition-colors block py-1"
                  >
                    Slider
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/components#time-picker" 
                    className="text-secondary-foreground hover:text-primary transition-colors block py-1"
                  >
                    Time Picker
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/components#elevated-button" 
                    className="text-secondary-foreground hover:text-primary transition-colors block py-1"
                  >
                    Elevated Button
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/components#password-field" 
                    className="text-secondary-foreground hover:text-primary transition-colors block py-1"
                  >
                    Password Field
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/components#signin-form" 
                    className="text-secondary-foreground hover:text-primary transition-colors block py-1"
                  >
                    Sign In Form
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/components#toast" 
                    className="text-secondary-foreground hover:text-primary transition-colors block py-1"
                  >
                    Toast
                  </Link>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">More components to come...</p>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Installation Section */}
          <section id="installation" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Installation</h2>
            <p className="text-secondary-foreground mb-4">
              Add the package to your project using Flutter pub:  
            </p>
            <div className="code-block mb-4">
              <pre><code>flutter pub add flutwid_ui</code></pre>
            </div>
          </section>

          {/* Slider Component */}
          <section id="slider" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Slider</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Installation</h3>
                  <div className="code-block mb-4">
                    <pre><code>dart run flutwid_ui:flutwid_ui add slide_button</code></pre>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Usage</h3>
                  <div className="code-block">
                    <pre><code>{`// Example usage
class SlideButtonExample extends StatelessWidget {
  const SlideButtonExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: SlideButton(
        onConfirm: () {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Action confirmed!')),
          );
        },
      ),
    );
  }
}`}</code></pre>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <img 
                  src="/4.slide-portrait.png" 
                  alt="Slider Component Preview" 
                  className="w-64 h-auto object-contain"
                />
              </div>
            </div>
          </section>

          {/* Time Picker Component */}
          <section id="time-picker" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Time Picker</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Installation</h3>
                  <div className="code-block mb-4">
                    <pre><code>dart run flutwid_ui:flutwid_ui add time_picker</code></pre>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Usage</h3>
                  <div className="code-block">
                    <pre><code>{`TimePicker(
  onTimeChanged: (selectedTime) {
    print('Selected time: ' + selectedTime.hour + ':' + selectedTime.minute);
  },
)`}</code></pre>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <img 
                  src="/3.date-portrait.png" 
                  alt="Date Picker Component Preview" 
                  className="w-64 h-auto object-contain"
                />
              </div>
            </div>
          </section>

          {/* Elevated Button Component */}
          <section id="elevated-button" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Elevated Button</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Installation</h3>
                  <div className="code-block mb-4">
                    <pre><code>dart run flutwid_ui:flutwid_ui add my_custom_button</code></pre>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Usage</h3>
                  <div className="code-block">
                    <pre><code>{`MyCustomButton(
  text: 'Full Width Button',
  onPressed: () {
    // Action here
  },
)`}</code></pre>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <img 
                  src="/2.button-portrait.png" 
                  alt="Elevated Button Component Preview" 
                  className="w-64 h-auto object-contain"
                />
              </div>
            </div>
          </section>

          {/* Password Field Component */}
          <section id="password-field" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Password Field</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Installation</h3>
                  <div className="code-block mb-4">
                    <pre><code>dart run flutwid_ui:flutwid_ui add password_field</code></pre>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Usage</h3>
                  <div className="code-block">
                    <pre><code>{`// Password Field
PasswordField(
  hintText: 'Enter your password',
  labelText: 'Password',
  validator: (value) {
    if (value == null || value.isEmpty) {
      return 'Please enter your password';
    }
    return null;
  },
)`}</code></pre>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <img 
                  src="/1.pass-portrait.png" 
                  alt="Password Field Component Preview" 
                  className="w-64 h-auto object-contain"
                />
              </div>
            </div>
          </section>

          {/* Sign In Form Component */}
          <section id="signin-form" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Sign In Form</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Installation</h3>
                  <div className="code-block mb-4">
                    <pre><code>dart run flutwid_ui:flutwid_ui add signin_form</code></pre>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Usage</h3>
                  <div className="code-block">
                    <pre><code>{`SigninForm(
  onSignInPressed: (email, password) {
    // Handle sign in logic
    print('Email: ' + email + ', Password: ' + password);
  },
  onForgotPasswordPressed: () {
    // Handle forgot password logic
    print('Forgot password pressed');
  },
)

// Customized usage
SigninForm(
  backgroundColor: Colors.black,
  primaryColor: Colors.white,
  buttonColor: Colors.white,
  buttonTextColor: Colors.black,
  borderRadius: 12.0,
  horizontalPadding: 24.0,
  emailHintText: 'Enter your email',
  passwordHintText: 'Enter your password',
  signInButtonText: 'Login',
  onSignInPressed: (email, password) {
    // Handle sign in logic
  },
)`}</code></pre>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <img 
                  src="/6.sign-portrait.png" 
                  alt="Sign In Form Component Preview" 
                  className="w-64 h-auto object-contain"
                />
              </div>
            </div>
          </section>

          {/* Toast Component */}
          <section id="toast" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Toast</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-6">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Installation</h3>
                  <div className="code-block mb-4">
                    <pre><code>dart run flutwid_ui:flutwid_ui add toast_notification</code></pre>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-medium mb-2">Usage</h3>
                  <div className="code-block">
                    <pre><code>{`ElevatedButton(
  onPressed: () {
    // Show a simple toast when button is clicked
    ToastNotification.show(
      context,
      message: 'This is a simple toast message',
    );
  },
  child: const Text('Show Toast'),
)

// Success toast at the top
ToastNotification.show(
  context,
  message: 'Success! Your action was completed',
  icon: Icons.check_circle,
  iconColor: Colors.green,
  position: ToastPosition.top,
);`}</code></pre>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <img 
                  src="/5.toast-portrait.png" 
                  alt="Toast Component Preview" 
                  className="w-64 h-auto object-contain"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
