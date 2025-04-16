export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-secondary-foreground mb-4">
              Flutwid UI is a collection of reusable Flutter components that can be easily integrated into your projects.
              This documentation will guide you through the installation process and how to use the components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Installation</h2>
            <p className="text-secondary-foreground mb-4">
              To install Flutwid UI, add it to your pubspec.yaml file:
            </p>
            <div className="code-block mb-4">
              <pre><code>flutter pub add flutwid_ui</code></pre>
            </div>
            <p className="text-secondary-foreground">
              Or run the following command in your terminal:
            </p>
            <div className="code-block">
              <pre><code>$ flutter pub add flutwid_ui</code></pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Usage</h2>
            <p className="text-secondary-foreground mb-4">
              After installing the package, you can add components to your project using the CLI:
            </p>
            <div className="code-block mb-4">
              <pre><code>dart run flutwid_ui:flutwid_ui add [component_name]</code></pre>
            </div>
            <p className="text-secondary-foreground">
              This will add the component to your project. You can then import and use it in your Flutter application.
              See the <a href="/components" className="text-primary hover:underline">Components</a> page for detailed usage examples.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Customization</h2>
            <p className="text-secondary-foreground mb-4">
              Most components in Flutwid UI can be customized to match your app's design system.
              You can customize colors, fonts, sizes, and other properties to create a consistent look and feel.
            </p>
            <p className="text-secondary-foreground">
              Check the individual component documentation for customization options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contributing</h2>
            <p className="text-secondary-foreground mb-4">
              We welcome contributions to Flutwid UI! If you'd like to contribute, please check out our
              <a href="https://github.com/kirubeldess/flutwid_ui" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                GitHub repository
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
