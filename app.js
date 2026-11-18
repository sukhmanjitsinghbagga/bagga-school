const CURRICULUM = [
  // ==================== HTML5 CURRICULUM (13 Topics) ====================
  {
    id: 'html-home',
    category: 'HTML',
    group: 'HTML Tutorial',
    title: 'HTML HOME & Intro',
    subtitle: 'HyperText Markup Language — The Standard Markup Language for Web Pages',
    summary: 'HTML stands for HyperText Markup Language. It describes the structure of a Web page using a series of elements that tell the browser how to display content.',
    keyPoints: [
      '<!DOCTYPE html> defines that this document is an HTML5 document.',
      '<html> is the root element of an HTML page.',
      '<head> contains meta information about the HTML page (title, character set, styles).',
      '<body> defines the document\'s body, containing all visible contents such as headings, paragraphs, images, and links.'
    ],
    note: 'HTML tags are not case-sensitive (<P> means the same as <p>), though lowercase tags are strongly recommended in modern HTML5.',
    exampleTitle: 'Basic HTML5 Boilerplate',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Web Page</title>
</head>
<body>

  <h1>Welcome to Bagga School</h1>
  <p>HTML is the backbone of every website on the internet.</p>

</body>
</html>`,
    exercise: {
      question: 'Which declaration defines that a document is written in HTML5?',
      options: ['<!DOCTYPE html>', '<html5>', '<!HTML5>', '<doctype>'],
      answer: 0
    }
  },
  {
    id: 'html-elements',
    category: 'HTML',
    group: 'HTML Tutorial',
    title: 'HTML Elements & Attributes',
    subtitle: 'Building Blocks and Additional Element Information',
    summary: 'An HTML element is defined by a start tag, some content, and an end tag. Attributes provide additional information about elements and are always specified in the start tag.',
    keyPoints: [
      'Syntax: <tagname attribute="value">Content goes here...</tagname>',
      'Void (empty) elements like <br>, <hr>, <img>, and <input> do not have a closing tag.',
      'Common attributes include id, class, style, title, href (for links), and src/alt (for images).',
      'Always quote attribute values using double quotes (e.g., title="Tooltip text").'
    ],
    table: {
      headers: ['Attribute', 'Applies To', 'Description'],
      rows: [
        ['href', '<a>', 'Specifies the URL of the page the link goes to'],
        ['src', '<img>, <script>', 'Specifies the path to the external resource'],
        ['alt', '<img>', 'Provides alternate text if an image cannot be displayed'],
        ['id / class', 'All elements', 'Assigns unique or shared identifiers for CSS & JS']
      ]
    },
    exampleTitle: 'Nested Elements & Attributes',
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif;">

  <h2 title="Hover tooltip example">HTML Attributes Demo</h2>
  <p>This paragraph contains <strong>bold text</strong> and <em>italicized text</em>.</p>
  <hr>
  <p>Line breaks can be inserted with <br> the empty &lt;br&gt; tag.</p>

</body>
</html>`,
    exercise: {
      question: 'Where are HTML attributes always specified?',
      options: ['In the end tag', 'In the start tag', 'Inside the <head> only', 'After the element'],
      answer: 1
    }
  },
  {
    id: 'html-headings-text',
    category: 'HTML',
    group: 'HTML Tutorial',
    title: 'Headings & Text Formatting',
    subtitle: 'Structuring Document Hierarchy and Semantic Emphasis',
    summary: 'HTML headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading, while <h6> defines the least important heading.',
    keyPoints: [
      'Search engines use headings to index the structure and content of your web pages.',
      'Use only one <h1> per page for the main title, followed by <h2> and <h3> for subsections.',
      'Use <strong> for important text and <em> for emphasized text instead of purely visual <b> and <i>.',
      'Other useful text tags: <mark> (highlighted), <small>, <del> (deleted), <ins> (inserted), <sub>, and <sup>.'
    ],
    exampleTitle: 'Headings & Semantic Text Tags',
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; line-height: 1.6;">

  <h1>Main Article Heading (H1)</h1>
  <h2>Section Heading (H2)</h2>
  <h3>Subsection Heading (H3)</h3>

  <p>Water is chemically written as H<sub>2</sub>O, and Einstein's formula is E = mc<sup>2</sup>.</p>
  <p>Sale price: <del>$99</del> <ins><mark>$49 Today!</mark></ins></p>
  <blockquote>"Simplicity is the soul of efficiency." — Austin Freeman</blockquote>

</body>
</html>`,
    exercise: {
      question: 'Which HTML tag defines the most important heading?',
      options: ['<heading>', '<h6>', '<h1>', '<head>'],
      answer: 2
    }
  },
  {
    id: 'html-links-images',
    category: 'HTML',
    group: 'HTML Tutorial',
    title: 'Links & Images',
    subtitle: 'Connecting Web Pages and Embedding Visual Media',
    summary: 'HTML links (hyperlinks) allow users to click their way from page to page using the <a> tag. Images are embedded using the <img> tag.',
    keyPoints: [
      'The <a> tag\'s most important attribute is href, which indicates the link\'s destination.',
      'target="_blank" opens the linked document in a new browser tab (pair with rel="noopener noreferrer").',
      'Bookmark links jump to a specific section on the same page using href="#section-id".',
      'The <img> tag requires two attributes: src (image URL) and alt (accessible text description).'
    ],
    exampleTitle: 'Hyperlinks & Images',
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif;">

  <h2>HTML Links</h2>
  <p><a href="#bottom-section">Jump to Bottom Section &darr;</a></p>
  <p><a href="https://example.com" target="_blank" rel="noopener">Visit Example.com (New Tab)</a></p>

  <h2>HTML Image with Alt Text</h2>
  <img src="https://placehold.co/320x120/04AA6D/ffffff?text=Bagga+School+Banner" alt="Bagga School Green Banner" style="border-radius: 6px;">

  <div id="bottom-section" style="margin-top: 40px; padding: 12px; background: #f3f4f6;">
    <strong>Bottom Section Reached!</strong>
  </div>

</body>
</html>`,
    exercise: {
      question: 'Which attribute specifies alternate text for an image if it cannot be displayed?',
      options: ['title', 'src', 'alt', 'longdesc'],
      answer: 2
    }
  },
  {
    id: 'html-lists',
    category: 'HTML',
    group: 'HTML Tutorial',
    title: 'HTML Lists',
    subtitle: 'Unordered, Ordered, and Description Lists',
    summary: 'HTML lists allow web developers to group a set of related items in lists: unordered bullet lists (<ul>), ordered numbered lists (<ol>), and description lists (<dl>).',
    keyPoints: [
      '<ul> creates a bulleted list where each item is wrapped in <li>.',
      '<ol> creates a numbered or lettered list; supports type="A|a|I|i|1" and start="5" attributes.',
      '<dl> defines a description list with <dt> (term/name) and <dd> (description).',
      'Lists can be nested inside other <li> items to build multi-level navigation menus.'
    ],
    exampleTitle: 'All Three HTML List Types',
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif;">

  <h3>Unordered List (Frontend Stack)</h3>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
  </ul>

  <h3>Ordered List (Setup Steps)</h3>
  <ol type="I">
    <li>Create index.html</li>
    <li>Link style.css</li>
    <li>Open in Browser</li>
  </ol>

  <h3>Description List</h3>
  <dl>
    <dt><strong>HTML</strong></dt>
    <dd>Defines the structure of web content.</dd>
    <dt><strong>CSS</strong></dt>
    <dd>Controls the visual presentation and layout.</dd>
  </dl>

</body>
</html>`,
    exercise: {
      question: 'Which HTML element defines a numbered (ordered) list?',
      options: ['<ul>', '<ol>', '<dl>', '<list>'],
      answer: 1
    }
  },
  {
    id: 'html-tables',
    category: 'HTML',
    group: 'HTML Tutorial',
    title: 'HTML Tables',
    subtitle: 'Organizing Tabular Data into Rows and Columns',
    summary: 'HTML tables allow web developers to arrange structured data into rows and columns using <table>, <tr>, <th>, and <td>.',
    keyPoints: [
      '<thead>, <tbody>, and <tfoot> semantically group table header, body, and footer rows.',
      '<th> defines a header cell (bold and centered by default), while <td> defines a standard data cell.',
      'Use colspan="2" to make a cell span across multiple columns, and rowspan="2" for multiple rows.',
      'Always use CSS border-collapse: collapse; for clean, modern table borders.'
    ],
    exampleTitle: 'Structured HTML Table with Colspan',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  table { width: 100%; border-collapse: collapse; font-family: sans-serif; }
  th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
  thead { background-color: #04AA6D; color: white; }
  tbody tr:nth-child(even) { background-color: #f9f9f9; }
</style>
</head>
<body>

  <table>
    <thead>
      <tr>
        <th>Course</th>
        <th>Module</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>HTML5</td>
        <td>Semantic Tags</td>
        <td>45 mins</td>
      </tr>
      <tr>
        <td>CSS3</td>
        <td>Flexbox & Grid</td>
        <td>90 mins</td>
      </tr>
      <tr>
        <td colspan="2"><strong>Total Study Time</strong></td>
        <td><strong>135 mins</strong></td>
      </tr>
    </tbody>
  </table>

</body>
</html>`,
    exercise: {
      question: 'Which attribute allows a table cell to span across multiple columns?',
      options: ['rowspan', 'span', 'colspan', 'merge'],
      answer: 2
    }
  },
  {
    id: 'html-block-inline',
    category: 'HTML',
    group: 'HTML Tutorial',
    title: 'Block & Inline Elements',
    subtitle: 'Understanding Default Document Display Flow',
    summary: 'Every HTML element has a default display value depending on what type of element it is. The two primary display values are block and inline.',
    keyPoints: [
      'Block-level elements always start on a new line and take up the full width available (e.g., <div>, <p>, <h1>-<h6>, <section>, <ul>).',
      'Inline elements do not start on a new line and only take up as much width as necessary (e.g., <span>, <a>, <strong>, <img>).',
      '<div> is the standard block-level container used to group larger sections of layout.',
      '<span> is the standard inline container used to style or target a part of text.'
    ],
    exampleTitle: 'Comparing <div> (Block) and <span> (Inline)',
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif;">

  <div style="background-color: #282A35; color: white; padding: 16px; border-radius: 6px;">
    <h3>This is inside a &lt;div&gt; block container</h3>
    <p>Notice how the div stretches 100% across the page width, whereas this 
      <span style="background-color: #04AA6D; padding: 2px 8px; border-radius: 4px; font-weight: bold;">
        &lt;span&gt; inline element
      </span> 
      flows right inside the sentence!
    </p>
  </div>

</body>
</html>`,
    exercise: {
      question: 'Which element is an inline container commonly used to mark up a part of text?',
      options: ['<div>', '<section>', '<span>', '<article>'],
      answer: 2
    }
  },
  {
    id: 'html-forms',
    category: 'HTML',
    group: 'HTML Forms',
    title: 'HTML Forms & Inputs',
    subtitle: 'Collecting User Input with Interactive Controls',
    summary: 'An HTML form (<form>) is used to collect user input and send it to a server or JavaScript handler for processing.',
    keyPoints: [
      'Always pair <label for="id"> with <input id="id"> for accessibility and larger click targets.',
      'HTML5 input types provide built-in validation: email, number, date, color, range, password, and file.',
      'Use <select> and <option> for dropdown menus, and <textarea> for multi-line text input.',
      'Validation attributes like required, minlength, maxlength, min, max, and pattern validate input before submission.'
    ],
    exampleTitle: 'Complete Registration Form',
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; max-width: 420px;">

  <form onsubmit="event.preventDefault(); alert('Form submitted successfully!');" style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
    <h3 style="margin-top:0;">Student Signup</h3>
    <label for="fname"><strong>Full Name:</strong></label><br>
    <input type="text" id="fname" required placeholder="Jane Doe" style="width:100%; padding:8px; margin:6px 0 12px;"><br>
    <label for="email"><strong>Email:</strong></label><br>
    <input type="email" id="email" required placeholder="jane@example.com" style="width:100%; padding:8px; margin:6px 0 12px;"><br>
    <label for="track"><strong>Learning Track:</strong></label><br>
    <select id="track" style="width:100%; padding:8px; margin:6px 0 12px;">
      <option value="html">HTML5 Fundamentals</option>
      <option value="css">CSS3 Layout Mastery</option>
    </select><br>
    <label><input type="checkbox" required> I agree to the terms</label><br><br>
    <button type="submit" style="background:#04AA6D; color:white; border:none; padding:10px 18px; border-radius:4px; font-weight:bold; cursor:pointer;">
      Register Now
    </button>
  </form>

</body>
</html>`,
    exercise: {
      question: 'Which attribute ensures an input field must be filled out before submitting a form?',
      options: ['validate', 'mandatory', 'required', 'placeholder'],
      answer: 2
    }
  },
  {
    id: 'html-semantic',
    category: 'HTML',
    group: 'HTML5 Advanced',
    title: 'Semantic HTML5',
    subtitle: 'Meaningful Elements for SEO, Accessibility, and Maintainability',
    summary: 'A semantic element clearly describes its meaning to both the browser and the developer—unlike non-semantic elements like <div> and <span>.',
    keyPoints: [
      '<header> represents introductory content or navigational links.',
      '<nav> defines a set of major navigation links.',
      '<main> specifies the dominant, unique content of the document (use only one per page).',
      '<article> represents self-contained content (blog post, news card), while <section> groups thematic content.',
      '<aside> defines sidebar content indirectly related to the main content, and <footer> defines footer info.'
    ],
    exampleTitle: 'Semantic Page Architecture',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: sans-serif; margin: 0; }
  header, footer { background: #282A35; color: white; padding: 14px 20px; }
  nav { background: #04AA6D; padding: 10px 20px; color: white; }
  main { display: flex; gap: 16px; padding: 20px; }
  article { flex: 3; background: #f9fafb; padding: 16px; border: 1px solid #ddd; }
  aside { flex: 1; background: #E7E9EB; padding: 16px; }
</style>
</head>
<body>

  <header><strong>Semantic Website Header</strong></header>
  <nav>Home | Articles | About</nav>
  <main>
    <article>
      <h2>Why Semantic HTML Matters</h2>
      <p>Screen readers and search engines rely on semantic tags like &lt;article&gt; and &lt;main&gt; to understand page structure.</p>
    </article>
    <aside>
      <h4>Related Links</h4>
      <p>ARIA Accessibility Guide</p>
    </aside>
  </main>
  <footer>&copy; 2026 Bagga School</footer>

</body>
</html>`,
    exercise: {
      question: 'Which semantic HTML5 element specifies the main, unique content of a document?',
      options: ['<section>', '<main>', '<body>', '<content>'],
      answer: 1
    }
  },
  {
    id: 'html-media',
    category: 'HTML',
    group: 'HTML5 Advanced',
    title: 'HTML Audio, Video & Iframes',
    subtitle: 'Native Multimedia Playback and Embedded Frames',
    summary: 'HTML5 introduced native <video> and <audio> elements, eliminating the need for third-party browser plugins.',
    keyPoints: [
      '<video controls width="400"> displays playback controls (play, pause, volume, fullscreen).',
      'Include multiple <source> elements (e.g., MP4 and WebM) so the browser picks the first supported format.',
      'Autoplay videos on modern browsers require the muted attribute: <video autoplay muted loop>.',
      '<iframe> embeds another HTML document or external widget (like maps or video players) inside the current page.'
    ],
    exampleTitle: 'Native HTML5 Video & Iframe Elements',
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif;">

  <h3>HTML5 Native Video Player</h3>
  <video width="360" controls poster="https://placehold.co/360x200/282A35/ffffff?text=HTML5+Video+Player">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Your browser does not support HTML video.
  </video>

  <h3>Embedded Iframe Preview</h3>
  <iframe srcdoc="<h4 style='font-family:sans-serif;color:#04AA6D;'>Hello from inside an &lt;iframe&gt;!</h4>" width="360" height="80" style="border:2px solid #04AA6D; border-radius:6px;"></iframe>

</body>
</html>`,
    exercise: {
      question: 'Which attribute adds play, pause, and volume buttons to an HTML5 <video> element?',
      options: ['buttons', 'player', 'controls', 'ui'],
      answer: 2
    }
  },
  {
    id: 'html-graphics',
    category: 'HTML',
    group: 'HTML5 Advanced',
    title: 'HTML SVG & Canvas',
    subtitle: 'Scalable Vector Graphics vs. Scriptable Bitmap Canvas',
    summary: 'HTML5 provides two powerful ways to draw graphics directly in the browser: <svg> for resolution-independent vector shapes and <canvas> for pixel-based JavaScript drawing.',
    keyPoints: [
      'SVG (Scalable Vector Graphics) defines graphics in XML format; every shape is an element in the DOM that never loses quality when zoomed.',
      'SVG supports <circle>, <rect>, <line>, <polygon>, and <path> tags.',
      '<canvas> is a bitmap drawing surface controlled via JavaScript (getContext("2d"))—ideal for games and real-time data visualizations.'
    ],
    exampleTitle: 'Inline SVG & JavaScript Canvas',
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif;">

  <h3>1. SVG Vector Graphic</h3>
  <svg width="220" height="100" style="border:1px solid #ccc; border-radius:6px;">
    <rect x="10" y="10" width="200" height="80" rx="12" fill="#282A35" />
    <circle cx="55" cy="50" r="24" fill="#04AA6D" />
    <text x="92" y="56" fill="white" font-size="18" font-weight="bold">SVG Logo</text>
  </svg>

  <h3>2. HTML5 Canvas Drawing</h3>
  <canvas id="myCanvas" width="220" height="100" style="border:1px solid #ccc; border-radius:6px;"></canvas>

  <script>
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#04AA6D";
    ctx.fillRect(20, 20, 180, 60);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText("Drawn with JS!", 50, 55);
  </script>

</body>
</html>`,
    exercise: {
      question: 'Which HTML graphic format scales infinitely without losing quality because it is XML-based?',
      options: ['<canvas>', '<svg>', '<bitmap>', '<img3d>'],
      answer: 1
    }
  },
  {
    id: 'html-meta-seo',
    category: 'HTML',
    group: 'HTML5 Advanced',
    title: 'Head, Meta Tags & SEO',
    subtitle: 'Configuring Viewport, Character Encoding, and Search Metadata',
    summary: 'The <head> element is a container for metadata (data about data) placed between the <html> tag and the <body> tag.',
    keyPoints: [
      '<meta charset="UTF-8"> ensures proper rendering of virtually all characters and symbols worldwide.',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0"> is essential for responsive mobile design.',
      '<meta name="description" content="..."> provides the page summary shown in search engine results.',
      'Open Graph tags (<meta property="og:title" ...>) control how links appear when shared on social media.'
    ],
    exampleTitle: 'Production-Ready HTML <head>',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML5 and CSS3 with interactive tutorials.">
  <meta name="keywords" content="HTML, CSS, Web Development, Tutorial">
  <meta name="author" content="Bagga School">
  <title>SEO-Optimized Web Page</title>
</head>
<body style="font-family: sans-serif;">
  <h2>Inspect the &lt;head&gt; tag in the code editor!</h2>
  <p>The viewport meta tag ensures this text scales cleanly on mobile phones and tablets.</p>
</body>
</html>`,
    exercise: {
      question: 'Which meta tag is required for responsive web design on mobile devices?',
      options: ['meta charset', 'meta viewport', 'meta keywords', 'meta refresh'],
      answer: 1
    }
  },
  {
    id: 'html-accessibility',
    category: 'HTML',
    group: 'HTML5 Advanced',
    title: 'HTML Accessibility & ARIA',
    subtitle: 'Building Inclusive Websites for Screen Readers and Keyboard Users',
    summary: 'Web accessibility ensures that websites are usable by everyone, including people using screen readers, keyboard navigation, or assistive technologies.',
    keyPoints: [
      'Always use semantic HTML elements (<button>, <nav>, <label>) first—they come with built-in keyboard accessibility.',
      'Use aria-label when an interactive icon button has no visible text (e.g., a close "X" button).',
      'Use aria-expanded="true|false" to indicate whether collapsible menus or accordions are open.',
      'Maintain a logical heading order (<h1> -> <h2> -> <h3>) and high color contrast.'
    ],
    exampleTitle: 'Accessible Interactive Controls',
    code: `<!DOCTYPE html>
<html>
<body style="font-family: sans-serif;">

  <nav aria-label="Main Navigation">
    <button aria-expanded="false" onclick="
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      document.getElementById('menu').hidden = expanded;
    " style="background:#04AA6D; color:white; border:none; padding:10px 16px; border-radius:4px; cursor:pointer;">
      Toggle Accessible Menu
    </button>

    <ul id="menu" hidden style="background:#f3f4f6; padding:12px 28px; margin-top:8px;">
      <li><a href="#home">Home</a></li>
      <li><a href="#courses">Courses</a></li>
    </ul>
  </nav>

</body>
</html>`,
    exercise: {
      question: 'Which attribute provides an accessible text label for an icon-only button?',
      options: ['alt-text', 'aria-label', 'data-name', 'role-text'],
      answer: 1
    }
  },

  // ==================== CSS3 CURRICULUM (13 Topics) ====================
  {
    id: 'css-home',
    category: 'CSS',
    group: 'CSS Tutorial',
    title: 'CSS HOME & Syntax',
    subtitle: 'Cascading Style Sheets — Styling and Laying Out Web Pages',
    summary: 'CSS describes how HTML elements are to be displayed on screen, paper, or in other media. A CSS rule consists of a selector and a declaration block.',
    keyPoints: [
      'Syntax: selector { property: value; } — e.g., p { color: #04AA6D; font-size: 18px; }',
      'Three ways to insert CSS: External stylesheet (<link rel="stylesheet" href="style.css">), Internal (<style>), and Inline (style="...").',
      'The "Cascade" resolves conflicting styles using Specificity, Source Order, and Importance (!important).'
    ],
    exampleTitle: 'Internal CSS Rule Sets',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { background-color: #f8fafc; font-family: sans-serif; padding: 20px; }
  h1 { color: #04AA6D; border-bottom: 2px solid #04AA6D; padding-bottom: 6px; }
  p { color: #334155; font-size: 16px; }
</style>
</head>
<body>
  <h1>Styled with CSS3</h1>
  <p>CSS separates document structure (HTML) from visual presentation (CSS).</p>
</body>
</html>`,
    exercise: {
      question: 'Which HTML tag is used to link an external CSS stylesheet?',
      options: ['<style>', '<css>', '<link>', '<script>'],
      answer: 2
    }
  },
  {
    id: 'css-selectors',
    category: 'CSS',
    group: 'CSS Tutorial',
    title: 'CSS Selectors & Specificity',
    subtitle: 'Targeting Elements Precisely with Classes, IDs, Combinators & Pseudo-classes',
    summary: 'CSS selectors are used to "find" (or select) the HTML elements you want to style based on element name, id, class, attribute, or state.',
    keyPoints: [
      'Element selector: p { ... } | Class selector: .card { ... } | ID selector: #header { ... }',
      'Combinators: Descendant (div p), Child (div > p), Adjacent sibling (h2 + p).',
      'Pseudo-classes style element states: :hover, :focus, :first-child, :nth-child(even).',
      'Specificity hierarchy (lowest to highest): Element (1) < Class/Pseudo-class (10) < ID (100) < Inline style (1000).'
    ],
    table: {
      headers: ['Selector', 'Example', 'Selects'],
      rows: [
        ['.class', '.btn', 'All elements with class="btn"'],
        ['#id', '#navbar', 'The unique element with id="navbar"'],
        [':hover', 'a:hover', 'Links when the user mouses over them'],
        ['[attr=val]', 'input[type="text"]', 'All text input elements']
      ]
    },
    exampleTitle: 'Classes, Pseudo-classes & Combinators',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  .card { border: 2px solid #e2e8f0; padding: 16px; border-radius: 8px; transition: all 0.2s; font-family: sans-serif; }
  .card:hover { border-color: #04AA6D; background-color: #f0fdf4; transform: translateY(-2px); }
  .card > h3 { color: #04AA6D; margin-top: 0; }
</style>
</head>
<body>
  <div class="card">
    <h3>Hover Over This Card</h3>
    <p>The <code>:hover</code> pseudo-class dynamically changes border and background colors.</p>
  </div>
</body>
</html>`,
    exercise: {
      question: 'Which CSS selector has higher specificity?',
      options: ['Element selector (div)', 'Class selector (.box)', 'ID selector (#hero)', 'Universal selector (*)'],
      answer: 2
    }
  },
  {
    id: 'css-colors-backgrounds',
    category: 'CSS',
    group: 'CSS Tutorial',
    title: 'Colors, Gradients & Backgrounds',
    subtitle: 'HEX, RGB, HSL, Linear/Radial Gradients, and Background Sizing',
    summary: 'CSS supports named colors, HEX (#04AA6D), RGB/RGBA, and HSL/HSLA values, along with rich multi-stop gradients and layered background images.',
    keyPoints: [
      'HSL (Hue, Saturation, Lightness) makes creating lighter/darker theme variations intuitive.',
      'Use rgba() or hsla() to apply alpha transparency without affecting child text opacity.',
      'linear-gradient(direction, color1, color2) creates smooth color transitions.',
      'background-size: cover; scales background images to fill a container without distortion.'
    ],
    exampleTitle: 'CSS Linear Gradients & Transparency',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  .hero-banner { background: linear-gradient(135deg, #282A35 0%, #04AA6D 100%); color: white; padding: 32px; border-radius: 12px; font-family: sans-serif; }
  .glass-badge { display: inline-block; background-color: rgba(255, 255, 255, 0.2); padding: 6px 14px; border-radius: 20px; font-weight: bold; }
</style>
</head>
<body>
  <div class="hero-banner">
    <span class="glass-badge">RGBA Transparency</span>
    <h2>135&deg; Linear Gradient</h2>
    <p>Combining deep charcoal (#282A35) with emerald green (#04AA6D).</p>
  </div>
</body>
</html>`,
    exercise: {
      question: 'Which CSS function creates a smooth transition between two or more colors along a straight line?',
      options: ['color-fade()', 'linear-gradient()', 'bg-blend()', 'gradient-line()'],
      answer: 1
    }
  },
  {
    id: 'css-box-model',
    category: 'CSS',
    group: 'CSS Tutorial',
    title: 'The CSS Box Model',
    subtitle: 'Content, Padding, Border, Margin, and box-sizing: border-box',
    summary: 'In CSS, every HTML element is treated as a rectangular box consisting of four layers from inside out: Content, Padding, Border, and Margin.',
    keyPoints: [
      'Content: The inner area where text and images appear.',
      'Padding: Clears an area around the content (inside the border); inherits the element\'s background.',
      'Border: A perimeter line going around the padding and content.',
      'Margin: Clears an outer space outside the border (always transparent).',
      'Best Practice: Always set * { box-sizing: border-box; } so padding and border are included inside an element\'s declared width and height.'
    ],
    exampleTitle: 'Interactive Box Model Visualization',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; }
  .margin-wrapper { background-color: #fef08a; padding: 20px; border: 1px dashed #ca8a04; font-family: sans-serif; }
  .box-element { width: 100%; background-color: #04AA6D; color: white; padding: 24px; border: 8px solid #282A35; border-radius: 8px; }
</style>
</head>
<body>
  <div class="margin-wrapper">
    <small style="color:#854d0e; font-weight:bold;">OUTER MARGIN AREA</small>
    <div class="box-element">
      <strong>CONTENT + PADDING (24px)</strong><br>
      Wrapped inside an 8px dark border with <code>box-sizing: border-box</code>.
    </div>
  </div>
</body>
</html>`,
    exercise: {
      question: 'Which CSS property ensures padding and border are included in an element\'s total width and height?',
      options: ['box-model: include', 'box-sizing: border-box', 'width-mode: exact', 'overflow: contain'],
      answer: 1
    }
  },
  {
    id: 'css-typography',
    category: 'CSS',
    group: 'CSS Tutorial',
    title: 'Typography & Units (px, rem, em)',
    subtitle: 'Font Families, Line Height, and Scalable Relative Units',
    summary: 'Good typography improves readability and visual hierarchy. Modern CSS relies on relative units like rem and em rather than fixed pixels for scalable text.',
    keyPoints: [
      'px is an absolute pixel unit; rem is relative to the root <html> font-size (default 16px, so 1.5rem = 24px).',
      'em is relative to the font-size of the parent element.',
      'Set line-height between 1.5 and 1.7 for comfortable body text reading.',
      'Use font-weight (400 normal, 600 semi-bold, 700 bold) and letter-spacing for crisp headings.'
    ],
    exampleTitle: 'Scalable Typography with rem Units',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  html { font-size: 16px; font-family: Georgia, serif; }
  .article-title { font-size: 2rem; line-height: 1.2; color: #111827; margin-bottom: 0.5rem; }
  .article-lead { font-size: 1.125rem; line-height: 1.65; color: #374151; }
</style>
</head>
<body>
  <h1 class="article-title">Editorial Typography with rem</h1>
  <p class="article-lead">Because <code>rem</code> scales relative to the root HTML font size, users who increase their browser's default text size get an accessible, proportional layout.</p>
</body>
</html>`,
    exercise: {
      question: 'Which CSS unit is always relative to the root <html> element\'s font size?',
      options: ['em', 'rem', 'vh', 'pt'],
      answer: 1
    }
  },
  {
    id: 'css-display-position',
    category: 'CSS',
    group: 'CSS Layout',
    title: 'Display, Position & Z-Index',
    subtitle: 'Controlling Layout Flow and Overlapping Layers',
    summary: 'The display property specifies how an element is rendered, while the position property determines how an element is positioned in the document.',
    keyPoints: [
      'display: block | inline | inline-block | none (completely hides element and removes its space).',
      'position: relative positions an element relative to its normal spot and establishes a positioning context for absolute children.',
      'position: absolute positions an element relative to its nearest positioned ancestor.',
      'position: fixed pins an element to the viewport, while sticky toggles between relative and fixed on scroll.',
      'z-index controls vertical stacking order on positioned elements.'
    ],
    exampleTitle: 'Relative Parent + Absolute Badge',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  .product-card { position: relative; width: 260px; padding: 24px 16px 16px; border: 2px solid #cbd5e1; border-radius: 10px; font-family: sans-serif; margin-top: 14px; }
  .badge { position: absolute; top: -12px; right: 14px; background: #04AA6D; color: white; font-size: 12px; font-weight: bold; padding: 4px 10px; border-radius: 999px; }
</style>
</head>
<body>
  <div class="product-card">
    <span class="badge">NEW</span>
    <h3 style="margin:0 0 6px;">Pro Web Course</h3>
    <p style="margin:0; color:#475569;">Positioned with <code>position: absolute</code> inside a <code>position: relative</code> card.</p>
  </div>
</body>
</html>`,
    exercise: {
      question: 'Which position value places an element relative to its nearest positioned ancestor?',
      options: ['static', 'absolute', 'fixed', 'inherit'],
      answer: 1
    }
  },
  {
    id: 'css-flexbox',
    category: 'CSS',
    group: 'CSS Layout',
    title: 'CSS Flexbox (1D Layout)',
    subtitle: 'Flexible One-Dimensional Alignment in Rows and Columns',
    summary: 'CSS Flexible Box Layout (Flexbox) makes it effortless to align, distribute, and reorder items along a single axis (row or column).',
    keyPoints: [
      'Enable Flexbox on a parent container with display: flex;',
      'flex-direction: row | column sets the main axis.',
      'justify-content aligns items along the main axis (flex-start, center, space-between, space-around).',
      'align-items aligns items along the cross axis (stretch, center, flex-start, flex-end).',
      'Use gap: 16px; for clean spacing between flex items without messy margins.'
    ],
    exampleTitle: 'Responsive Flexbox Navbar & Cards',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: sans-serif; margin: 0; }
  .navbar { display: flex; justify-content: space-between; align-items: center; background: #282A35; color: white; padding: 12px 20px; }
  .nav-links { display: flex; gap: 16px; }
  .flex-row { display: flex; gap: 12px; padding: 16px; flex-wrap: wrap; }
  .flex-item { flex: 1 1 120px; background: #04AA6D; color: white; padding: 20px; text-align: center; border-radius: 6px; font-weight: bold; }
</style>
</head>
<body>
  <div class="navbar"><strong>BrandLogo</strong><div class="nav-links"><span>Docs</span><span>Pricing</span><span>Login</span></div></div>
  <div class="flex-row"><div class="flex-item">Box 1</div><div class="flex-item">Box 2</div><div class="flex-item">Box 3</div></div>
</body>
</html>`,
    exercise: {
      question: 'Which Flexbox property aligns items along the main axis?',
      options: ['align-items', 'justify-content', 'flex-wrap', 'align-content'],
      answer: 1
    }
  },
  {
    id: 'css-grid',
    category: 'CSS',
    group: 'CSS Layout',
    title: 'CSS Grid (2D Layout)',
    subtitle: 'Two-Dimensional Rows and Columns with fr Units & auto-fit',
    summary: 'CSS Grid Layout excels at dividing a page into major regions or building two-dimensional card grids with simultaneous control over rows and columns.',
    keyPoints: [
      'Activate Grid on a container with display: grid;',
      'grid-template-columns: repeat(3, 1fr); creates three equal-width columns using fractional (fr) units.',
      'Responsive magic formula without media queries: grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));',
      'Use grid-column: span 2; to make an item span across multiple columns.'
    ],
    exampleTitle: 'Responsive CSS Grid Dashboard',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 14px; font-family: sans-serif; }
  .grid-card { background: #E7E9EB; border-left: 5px solid #04AA6D; padding: 18px; border-radius: 6px; font-weight: bold; }
  .wide-card { grid-column: span 2; background: #282A35; color: white; }
</style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-card wide-card">Featured Wide Card (span 2)</div>
    <div class="grid-card">Metric A</div>
    <div class="grid-card">Metric B</div>
    <div class="grid-card">Metric C</div>
  </div>
</body>
</html>`,
    exercise: {
      question: 'What does the "fr" unit represent in CSS Grid?',
      options: ['Fixed ratio', 'A fraction of the available space in the grid container', 'Font-relative size', 'Frame rate'],
      answer: 1
    }
  },
  {
    id: 'css-responsive',
    category: 'CSS',
    group: 'CSS Responsive & Modern',
    title: 'Responsive Design & Media Queries',
    subtitle: 'Adapting Layouts Across Mobile, Tablet, and Desktop Viewports',
    summary: 'Responsive Web Design makes your web page look good on all devices using fluid grids, flexible images, and CSS @media queries.',
    keyPoints: [
      'Mobile-First approach: Write base CSS for small screens first, then add @media (min-width: 768px) for tablets and desktops.',
      'Always set img { max-width: 100%; height: auto; } so images never overflow their containers.',
      'Modern Container Queries (@container) allow components to adapt based on their parent container\'s width rather than the whole screen.'
    ],
    exampleTitle: 'Mobile-First Media Query Demo',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  .responsive-box { background-color: #282A35; color: white; padding: 24px; border-radius: 8px; font-family: sans-serif; text-align: center; }
  @media (min-width: 500px) { .responsive-box { background-color: #04AA6D; } }
</style>
</head>
<body>
  <div class="responsive-box">
    <h3>Resize the Browser / Preview Pane!</h3>
    <p>Dark charcoal below 500px wide &bull; Emerald green at 500px and wider.</p>
  </div>
</body>
</html>`,
    exercise: {
      question: 'Which CSS at-rule applies styles only when specific viewport width or device conditions are met?',
      options: ['@viewport', '@media', '@responsive', '@screen'],
      answer: 1
    }
  },
  {
    id: 'css-transitions-animations',
    category: 'CSS',
    group: 'CSS Responsive & Modern',
    title: 'Transitions, Transforms & Animations',
    subtitle: 'Smooth Hardware-Accelerated Motion with @keyframes',
    summary: 'CSS transitions allow you to change property values smoothly over a given duration, while @keyframes animations enable multi-step looping motion.',
    keyPoints: [
      'transition: transform 0.3s ease, background-color 0.3s ease; animates state changes like :hover.',
      'transform functions (translate, scale, rotate) run on the GPU for silky-smooth 60fps performance.',
      'Define multi-stage animations with @keyframes name { 0% { ... } 100% { ... } } and apply via the animation property.'
    ],
    exampleTitle: 'Hover Transform & Keyframe Pulse',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: sans-serif; display: flex; gap: 24px; align-items: center; padding: 20px; }
  .hover-btn { background: #04AA6D; color: white; border: none; padding: 14px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .hover-btn:hover { transform: translateY(-4px) scale(1.04); box-shadow: 0 10px 20px rgba(4, 170, 109, 0.35); }
  @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
  .pulse-dot { width: 24px; height: 24px; background: #04AA6D; border-radius: 50%; animation: pulse 1.5s infinite ease-in-out; }
</style>
</head>
<body>
  <button class="hover-btn">Hover Me (Transition)</button>
  <div class="pulse-dot" title="Keyframe Animation"></div>
</body>
</html>`,
    exercise: {
      question: 'Which CSS at-rule defines the stages and styles of a multi-step CSS animation?',
      options: ['@animation', '@motion', '@keyframes', '@frames'],
      answer: 2
    }
  },
  {
    id: 'css-variables',
    category: 'CSS',
    group: 'CSS Responsive & Modern',
    title: 'CSS Variables (Custom Properties)',
    subtitle: 'Reusable Design Tokens and Instant Dark Mode Switching',
    summary: 'CSS Custom Properties (variables) allow you to store specific values (colors, spacing, fonts) in one place and reuse them throughout your stylesheet.',
    keyPoints: [
      'Declare global variables inside the :root pseudo-class using double hyphens: --primary: #04AA6D;',
      'Retrieve a variable anywhere using the var() function: background-color: var(--primary);',
      'Unlike preprocessor variables (Sass), CSS variables are live in the DOM and can be updated dynamically via media queries or JavaScript.'
    ],
    exampleTitle: 'Theme Tokens with :root & var()',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  :root { --brand-color: #04AA6D; --surface-bg: #f3f4f6; --text-main: #1f2937; --radius: 10px; }
  .dark-theme { --surface-bg: #282A35; --text-main: #f9fafb; }
  .themed-card { background: var(--surface-bg); color: var(--text-main); border-top: 4px solid var(--brand-color); border-radius: var(--radius); padding: 20px; font-family: sans-serif; margin-bottom: 12px; }
</style>
</head>
<body>
  <div class="themed-card"><strong>Light Surface Token</strong> — Styled with CSS Custom Properties.</div>
  <div class="themed-card dark-theme"><strong>Dark Surface Token</strong> — Overriding <code>--surface-bg</code> on a single class!</div>
</body>
</html>`,
    exercise: {
      question: 'Which CSS function is used to insert the value of a CSS custom property?',
      options: ['val()', 'var()', 'prop()', 'get()'],
      answer: 1
    }
  },
  {
    id: 'css-functions',
    category: 'CSS',
    group: 'CSS Responsive & Modern',
    title: 'Modern CSS: clamp(), calc() & :has()',
    subtitle: 'Fluid Typography, Dynamic Math, and the Parent Selector',
    summary: 'Modern CSS includes native math functions like calc() and clamp(), native CSS nesting, and the relational :has() selector.',
    keyPoints: [
      'calc(100% - 40px) mixes different units (percentages and pixels) in real time.',
      'clamp(min, preferred, max) creates fluid typography that scales smoothly between a minimum and maximum size without media queries.',
      ':has() acts as a "parent selector"—for example, form:has(input:invalid) styles the entire form when any child input is invalid.'
    ],
    exampleTitle: 'Fluid clamp() Heading & :has() Parent Styling',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: sans-serif; }
  .fluid-heading { font-size: clamp(1.4rem, 4vw, 2.5rem); color: #04AA6D; }
  .form-box { border: 2px solid #cbd5e1; padding: 16px; border-radius: 8px; }
  .form-box:has(input:checked) { border-color: #04AA6D; background-color: #f0fdf4; }
</style>
</head>
<body>
  <h1 class="fluid-heading">Fluid Heading with clamp()</h1>
  <div class="form-box">
    <label style="cursor:pointer; font-weight:bold;">
      <input type="checkbox"> Check me to style my parent container using <code>:has()</code>!
    </label>
  </div>
</body>
</html>`,
    exercise: {
      question: 'Which modern CSS pseudo-class allows you to style a parent element based on its child elements?',
      options: [':parent()', ':contains()', ':has()', ':within()'],
      answer: 2
    }
  },
  {
    id: 'css-best-practices',
    category: 'CSS',
    group: 'CSS Responsive & Modern',
    title: 'CSS Architecture & Best Practices',
    subtitle: 'Writing Maintainable, Scalable, and High-Performance Stylesheets',
    summary: 'As projects grow, clean CSS architecture prevents specificity wars, duplicated styles, and layout bugs.',
    keyPoints: [
      'Start every stylesheet with a minimal CSS Reset (* { box-sizing: border-box; margin: 0; }).',
      'Use consistent naming conventions like BEM (Block__Element--Modifier, e.g., .card__title--featured).',
      'Avoid over-qualifying selectors or relying on !important.',
      'Use logical properties (margin-inline, padding-block) to automatically support both Left-to-Right and Right-to-Left languages.'
    ],
    exampleTitle: 'BEM Naming & Logical Properties',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
  .alert { padding-block: 14px; padding-inline: 18px; border-inline-start: 6px solid #04AA6D; background-color: #f3f4f6; font-family: sans-serif; border-radius: 4px; }
  .alert__title { font-weight: 700; margin-bottom: 4px; color: #111827; }
  .alert--warning { border-inline-start-color: #eab308; background-color: #fefce8; }
</style>
</head>
<body>
  <div class="alert"><div class="alert__title">BEM Success Alert</div><div>Clean, predictable class names prevent style collisions.</div></div><br>
  <div class="alert alert--warning"><div class="alert__title">BEM Modifier (.alert--warning)</div><div>Modifies only the accent color without duplicating layout rules.</div></div>
</body>
</html>`,
    exercise: {
      question: 'What does BEM stand for in CSS naming methodology?',
      options: ['Box, Element, Margin', 'Block, Element, Modifier', 'Base, Extension, Module', 'Browser, Engine, Mode'],
      answer: 1
    }
  }
];

const REFERENCE_ITEMS = [
  { tag: '<!DOCTYPE html>', category: 'HTML', desc: 'Defines the document type as HTML5', topicId: 'html-home' },
  { tag: '<a>', category: 'HTML', desc: 'Defines a hyperlink with href attribute', topicId: 'html-links-images' },
  { tag: '<img>', category: 'HTML', desc: 'Embeds an image with src and alt attributes', topicId: 'html-links-images' },
  { tag: '<ul> / <ol> / <li>', category: 'HTML', desc: 'Defines unordered, ordered lists and list items', topicId: 'html-lists' },
  { tag: '<table> / <tr> / <td>', category: 'HTML', desc: 'Defines tabular data rows and cells', topicId: 'html-tables' },
  { tag: '<form> / <input>', category: 'HTML', desc: 'Defines interactive forms and user input fields', topicId: 'html-forms' },
  { tag: '<header> / <main> / <footer>', category: 'HTML', desc: 'Semantic HTML5 page landmark elements', topicId: 'html-semantic' },
  { tag: '<video> / <audio>', category: 'HTML', desc: 'Native HTML5 multimedia players', topicId: 'html-media' },
  { tag: '<svg> / <canvas>', category: 'HTML', desc: 'Vector and bitmap browser graphics', topicId: 'html-graphics' },
  { tag: 'box-sizing: border-box', category: 'CSS', desc: 'Includes padding and border in element width/height', topicId: 'css-box-model' },
  { tag: 'display: flex', category: 'CSS', desc: 'Enables 1D Flexbox row/column alignment', topicId: 'css-flexbox' },
  { tag: 'display: grid', category: 'CSS', desc: 'Enables 2D CSS Grid layout system', topicId: 'css-grid' },
  { tag: 'position: relative / absolute', category: 'CSS', desc: 'Controls element positioning context and offsets', topicId: 'css-display-position' },
  { tag: '@media (min-width: ...)', category: 'CSS', desc: 'Applies responsive styles based on viewport width', topicId: 'css-responsive' },
  { tag: 'transition / @keyframes', category: 'CSS', desc: 'Creates smooth property transitions and animations', topicId: 'css-transitions-animations' },
  { tag: '--var / var()', category: 'CSS', desc: 'Defines and uses reusable CSS Custom Properties', topicId: 'css-variables' },
  { tag: 'clamp() / :has()', category: 'CSS', desc: 'Fluid responsive sizing and parent element selection', topicId: 'css-functions' }
];

let currentTopicId = 'html-home';
let activeCategory = 'HTML';
let completedLessons = new Set(JSON.parse(localStorage.getItem('baggaschool_completed') || '[]'));
let defaultTryItCode = '';
let isVerticalSplit = false;

let quizIndex = 0;
let quizScore = 0;
let quizQuestions = [];

function saveProgress() {
  localStorage.setItem('baggaschool_completed', JSON.stringify([...completedLessons]));
  document.getElementById('progress-counter').textContent = `${completedLessons.size} / ${CURRICULUM.length} Done`;
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  sidebar.classList.toggle('-translate-x-full');
  backdrop.classList.toggle('hidden');
}

function switchCategory(cat) {
  activeCategory = cat;
  updateNavTabs(cat);
  const firstTopic = CURRICULUM.find(t => t.category === cat);
  if (firstTopic) {
    loadTopic(firstTopic.id);
  }
}

function updateNavTabs(activeTab) {
  const tabs = {
    HTML: document.getElementById('tab-html'),
    CSS: document.getElementById('tab-css'),
    REF: document.getElementById('tab-ref'),
    QUIZ: document.getElementById('tab-quiz')
  };
  Object.entries(tabs).forEach(([key, el]) => {
    if (!el) return;
    if (key === activeTab) {
      el.classList.add('bg-[#04AA6D]', 'text-white');
      el.classList.remove('text-gray-200', 'hover:bg-black');
    } else {
      el.classList.remove('bg-[#04AA6D]', 'text-white');
      el.classList.add('text-gray-200', 'hover:bg-black');
    }
  });
}

function renderSidebar(filterText = '') {
  const container = document.getElementById('sidebar-content');
  const query = filterText.trim().toLowerCase();
  const categories = ['HTML', 'CSS'];
  let html = '';

  categories.forEach(cat => {
    const topicsInCat = CURRICULUM.filter(t =>
      t.category === cat &&
      (!query || t.title.toLowerCase().includes(query) || t.subtitle.toLowerCase().includes(query))
    );

    if (topicsInCat.length === 0) return;

    html += `<div class="px-4 pt-5 pb-2 text-xs font-extrabold uppercase tracking-wider text-gray-500 border-b border-gray-300">${cat}5 / ${cat}3 Curriculum</div>`;

    let currentGroup = '';
    topicsInCat.forEach(topic => {
      if (topic.group !== currentGroup) {
        currentGroup = topic.group;
        html += `<div class="px-4 pt-3 pb-1 text-sm font-bold text-gray-800">${currentGroup}</div>`;
      }
      const isActive = topic.id === currentTopicId;
      const isDone = completedLessons.has(topic.id);
      html += `
        <button
          onclick="loadTopic('${topic.id}'); if(window.innerWidth < 1024) toggleSidebar();"
          class="w-full text-left px-4 py-2 text-sm flex items-center justify-between transition ${isActive ? 'w3-sidebar-active' : 'text-gray-700 hover:bg-gray-300'}"
        >
          <span class="truncate pr-2">${topic.title}</span>
          ${isDone ? `<span class="text-xs font-bold ${isActive ? 'text-white' : 'text-[#04AA6D]'}">&#10003;</span>` : ''}
        </button>
      `;
    });
  });

  container.innerHTML = html || `<div class="p-4 text-sm text-gray-500">No matching topics found.</div>`;
}

function filterSidebar(val) {
  renderSidebar(val);
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function loadTopic(topicId) {
  const idx = CURRICULUM.findIndex(t => t.id === topicId);
  if (idx === -1) return;

  currentTopicId = topicId;
  const topic = CURRICULUM[idx];
  activeCategory = topic.category;
  updateNavTabs(topic.category);
  renderSidebar(document.getElementById('topic-search')?.value || '');

  const prevTopic = idx > 0 ? CURRICULUM[idx - 1] : null;
  const nextTopic = idx < CURRICULUM.length - 1 ? CURRICULUM[idx + 1] : null;
  const isCompleted = completedLessons.has(topic.id);

  const navButtonsHTML = `
    <div class="flex items-center justify-between my-6">
      ${prevTopic
        ? `<button onclick="loadTopic('${prevTopic.id}')" class="w3-green text-white font-bold px-4 py-2 rounded text-sm shadow transition">&laquo; Previous</button>`
        : `<span></span>`
      }
      ${nextTopic
        ? `<button onclick="loadTopic('${nextTopic.id}')" class="w3-green text-white font-bold px-4 py-2 rounded text-sm shadow transition">Next &raquo;</button>`
        : `<button onclick="openQuizView()" class="bg-[#282A35] hover:bg-black text-white font-bold px-4 py-2 rounded text-sm shadow transition">Take Final Quiz &raquo;</button>`
      }
    </div>
  `;

  let tableHTML = '';
  if (topic.table) {
    tableHTML = `
      <div class="overflow-x-auto my-6">
        <table class="w3-table text-sm">
          <thead>
            <tr>${topic.table.headers.map(h => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${topic.table.rows.map(row => `<tr>${row.map((cell, i) => `<td class="${i === 0 ? 'font-mono font-semibold text-[#04AA6D]' : ''}">${escapeHTML(cell)}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  const container = document.getElementById('lesson-container');
  container.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2">
      <span class="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-green-100 text-[#04AA6D]">
        ${topic.category} &bull; ${topic.group}
      </span>
      <button
        onclick="toggleLessonComplete('${topic.id}')"
        class="text-xs font-bold px-3 py-1.5 rounded border transition ${isCompleted ? 'bg-[#04AA6D] text-white border-[#04AA6D]' : 'bg-white text-gray-700 border-gray-300 hover:border-[#04AA6D]'}"
      >
        ${isCompleted ? '&#10003; Completed' : 'Mark as Completed'}
      </button>
    </div>

    <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">${topic.title}</h1>
    <p class="text-lg text-gray-600 mt-1">${topic.subtitle}</p>

    ${navButtonsHTML}

    <hr class="border-gray-200 my-6">

    <div class="bg-[#D9EEE1] border-l-4 border-[#04AA6D] p-5 rounded-r my-6">
      <p class="text-gray-900 text-base leading-relaxed font-medium">${escapeHTML(topic.summary)}</p>
    </div>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-3">Key Concepts & Syntax Rules</h2>
    <ul class="list-disc pl-6 space-y-2.5 text-gray-800 text-base leading-relaxed">
      ${topic.keyPoints.map(pt => `<li>${escapeHTML(pt)}</li>`).join('')}
    </ul>

    ${topic.note ? `
      <div class="w3-note rounded-r text-sm text-gray-800">
        <strong>Tip:</strong> ${escapeHTML(topic.note)}
      </div>
    ` : ''}

    ${tableHTML}

    <div class="w3-example-box shadow-sm">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold text-gray-900">Example: ${escapeHTML(topic.exampleTitle)}</h3>
        <button onclick="copyLessonCode()" class="text-xs bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 px-2.5 py-1 rounded font-semibold">
          Copy Code
        </button>
      </div>
      <pre id="lesson-code-block" class="w3-code-box text-gray-800"><code>${escapeHTML(topic.code)}</code></pre>
      <button onclick="openTryIt()" class="w3-green text-white font-bold px-5 py-2.5 rounded text-sm shadow inline-flex items-center space-x-2 transition">
        <span>Try it Yourself &raquo;</span>
      </button>
    </div>

    <div class="bg-[#282A35] text-white rounded-lg p-6 my-8 shadow">
      <span class="text-xs font-bold uppercase tracking-wider text-[#04AA6D]">Test Yourself With Exercises</span>
      <h3 class="text-xl font-bold mt-1">Quick Check</h3>
      <p class="text-gray-200 mt-2 mb-4">${escapeHTML(topic.exercise.question)}</p>
      <div class="space-y-2" id="exercise-options">
        ${topic.exercise.options.map((opt, i) => `
          <button
            onclick="checkInlineExercise(${i}, ${topic.exercise.answer}, '${topic.id}')"
            class="w-full text-left px-4 py-2.5 rounded bg-gray-700 hover:bg-gray-600 text-sm font-mono transition border border-gray-600"
          >
            ${escapeHTML(opt)}
          </button>
        `).join('')}
      </div>
      <div id="exercise-feedback" class="mt-3 text-sm font-bold hidden"></div>
    </div>

    <hr class="border-gray-200 my-6">

    ${navButtonsHTML}
  `;

  document.getElementById('main-scroll').scrollTop = 0;
}

function toggleLessonComplete(topicId) {
  if (completedLessons.has(topicId)) {
    completedLessons.delete(topicId);
  } else {
    completedLessons.add(topicId);
  }
  saveProgress();
  loadTopic(topicId);
}

function checkInlineExercise(selectedIdx, correctIdx, topicId) {
  const feedback = document.getElementById('exercise-feedback');
  const buttons = document.querySelectorAll('#exercise-options button');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.remove('hover:bg-gray-600');
    if (idx === correctIdx) {
      btn.classList.remove('bg-gray-700', 'border-gray-600');
      btn.classList.add('bg-[#04AA6D]', 'border-green-400', 'text-white');
    } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
      btn.classList.remove('bg-gray-700', 'border-gray-600');
      btn.classList.add('bg-red-600', 'border-red-400', 'text-white');
    }
  });

  feedback.classList.remove('hidden');
  if (selectedIdx === correctIdx) {
    feedback.innerHTML = `<span class="text-[#04AA6D]">&#10003; Correct! Lesson marked as completed.</span>`;
    completedLessons.add(topicId);
    saveProgress();
    renderSidebar();
  } else {
    feedback.innerHTML = `<span class="text-red-400">&#10007; Not quite! The correct answer is highlighted in green above.</span>`;
  }
}

function copyLessonCode() {
  const topic = CURRICULUM.find(t => t.id === currentTopicId);
  if (!topic) return;
  navigator.clipboard.writeText(topic.code);
  alert('Code copied to clipboard!');
}

function openTryIt() {
  const topic = CURRICULUM.find(t => t.id === currentTopicId);
  if (!topic) return;

  defaultTryItCode = topic.code;
  document.getElementById('tryit-title').textContent = `— ${topic.title}`;
  document.getElementById('tryit-textarea').value = defaultTryItCode;
  document.getElementById('tryit-modal').classList.remove('hidden');
  document.getElementById('tryit-modal').classList.add('flex');
  runTryItCode();
}

function closeTryIt() {
  document.getElementById('tryit-modal').classList.add('hidden');
  document.getElementById('tryit-modal').classList.remove('flex');
}

function runTryItCode() {
  const code = document.getElementById('tryit-textarea').value;
  const iframe = document.getElementById('tryit-iframe');
  iframe.srcdoc = code;
}

function resetTryItCode() {
  document.getElementById('tryit-textarea').value = defaultTryItCode;
  runTryItCode();
}

function toggleTryItOrientation() {
  const panes = document.getElementById('tryit-panes');
  isVerticalSplit = !isVerticalSplit;
  if (isVerticalSplit) {
    panes.classList.remove('md:flex-row');
  } else {
    panes.classList.add('md:flex-row');
  }
}

function openReferenceView() {
  updateNavTabs('REF');
  const container = document.getElementById('lesson-container');
  container.innerHTML = `
    <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900">HTML5 & CSS3 Quick Reference</h1>
    <p class="text-lg text-gray-600 mt-1">Searchable cheat sheet of essential HTML tags and CSS properties.</p>

    <div class="my-6">
      <input
        type="text"
        oninput="filterReferenceTable(this.value)"
        placeholder="Filter tags or CSS properties (e.g. flex, form, grid, video)..."
        class="w-full border-2 border-gray-300 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:border-[#04AA6D]"
      />
    </div>

    <div class="overflow-x-auto">
      <table class="w3-table text-sm">
        <thead>
          <tr>
            <th>Tag / Property</th>
            <th>Category</th>
            <th>Description</th>
            <th>Lesson</th>
          </tr>
        </thead>
        <tbody id="ref-table-body">
          ${renderReferenceRows(REFERENCE_ITEMS)}
        </tbody>
      </table>
    </div>
  `;
  document.getElementById('main-scroll').scrollTop = 0;
}

function renderReferenceRows(items) {
  return items.map(item => `
    <tr>
      <td class="font-mono font-bold text-[#04AA6D]">${escapeHTML(item.tag)}</td>
      <td><span class="px-2 py-0.5 rounded text-xs font-bold ${item.category === 'HTML' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}">${item.category}</span></td>
      <td>${escapeHTML(item.desc)}</td>
      <td><button onclick="loadTopic('${item.topicId}')" class="text-[#04AA6D] font-bold hover:underline">Open &raquo;</button></td>
    </tr>
  `).join('');
}

function filterReferenceTable(query) {
  const q = query.trim().toLowerCase();
  const filtered = REFERENCE_ITEMS.filter(item =>
    item.tag.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q)
  );
  document.getElementById('ref-table-body').innerHTML = renderReferenceRows(filtered);
}

function openQuizView() {
  updateNavTabs('QUIZ');
  quizQuestions = [...CURRICULUM]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map(t => ({
      category: t.category,
      title: t.title,
      ...t.exercise
    }));
  quizIndex = 0;
  quizScore = 0;
  renderQuizQuestion();
  document.getElementById('main-scroll').scrollTop = 0;
}

function renderQuizQuestion() {
  const container = document.getElementById('lesson-container');
  if (quizIndex >= quizQuestions.length) {
    const pct = Math.round((quizScore / quizQuestions.length) * 100);
    container.innerHTML = `
      <div class="bg-[#282A35] text-white rounded-xl p-8 text-center shadow-lg my-6">
        <span class="text-xs font-bold uppercase tracking-widest text-[#04AA6D]">Quiz Complete</span>
        <h1 class="text-4xl font-extrabold mt-2">You Scored ${quizScore} / ${quizQuestions.length} (${pct}%)</h1>
        <p class="text-gray-300 mt-3 max-w-md mx-auto">
          ${pct >= 80 ? 'Outstanding work! You have a strong command of HTML5 and CSS3 fundamentals.' : 'Good effort! Review the lessons in the sidebar and try again to boost your score.'}
        </p>
        <div class="mt-6 flex justify-center gap-4">
          <button onclick="openQuizView()" class="w3-green text-white font-bold px-6 py-2.5 rounded shadow">Retake Quiz</button>
          <button onclick="loadTopic('html-home')" class="bg-white text-gray-900 font-bold px-6 py-2.5 rounded shadow">Back to Tutorials</button>
        </div>
      </div>
    `;
    return;
  }

  const q = quizQuestions[quizIndex];
  container.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-3xl font-extrabold text-gray-900">HTML & CSS Mastery Quiz</h1>
      <span class="bg-[#04AA6D] text-white text-sm font-bold px-3 py-1 rounded-full">
        Question ${quizIndex + 1} of ${quizQuestions.length}
      </span>
    </div>

    <div class="w-full bg-gray-200 h-2.5 rounded-full mb-8 overflow-hidden">
      <div class="bg-[#04AA6D] h-2.5 transition-all" style="width: ${((quizIndex) / quizQuestions.length) * 100}%"></div>
    </div>

    <div class="bg-[#E7E9EB] rounded-lg p-6 sm:p-8 shadow-sm">
      <span class="text-xs font-extrabold uppercase text-[#04AA6D]">${q.category} &bull; ${q.title}</span>
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mt-2 mb-6">${escapeHTML(q.question)}</h2>

      <div class="space-y-3" id="quiz-choices">
        ${q.options.map((opt, idx) => `
          <button
            onclick="submitQuizAnswer(${idx})"
            class="w-full text-left bg-white hover:bg-green-50 border-2 border-gray-300 hover:border-[#04AA6D] px-5 py-3.5 rounded-lg font-mono text-sm sm:text-base font-medium transition"
          >
            ${escapeHTML(opt)}
          </button>
        `).join('')}
      </div>

      <div id="quiz-next-bar" class="mt-6 hidden flex justify-end">
        <button onclick="quizIndex++; renderQuizQuestion();" class="w3-green text-white font-bold px-6 py-2.5 rounded shadow">
          ${quizIndex === quizQuestions.length - 1 ? 'See Results &raquo;' : 'Next Question &raquo;'}
        </button>
      </div>
    </div>
  `;
}

function submitQuizAnswer(selectedIdx) {
  const q = quizQuestions[quizIndex];
  const buttons = document.querySelectorAll('#quiz-choices button');

  if (selectedIdx === q.answer) {
    quizScore++;
  }

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.remove('hover:bg-green-50', 'hover:border-[#04AA6D]');
    if (idx === q.answer) {
      btn.classList.remove('bg-white', 'border-gray-300');
      btn.classList.add('bg-[#04AA6D]', 'border-[#04AA6D]', 'text-white');
    } else if (idx === selectedIdx) {
      btn.classList.remove('bg-white', 'border-gray-300');
      btn.classList.add('bg-red-600', 'border-red-600', 'text-white');
    }
  });

  document.getElementById('quiz-next-bar').classList.remove('hidden');
}

// Initialize Application
saveProgress();
loadTopic('html-home');