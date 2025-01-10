# **Typography Enhancements for Aoife Conleavy's Website**

## **Introduction**
Aoife Conleavy, a novelist known for her travel-inspired works, aims to improve the readability and visual appeal of her professional website. Her latest novel, *Tide Blade*, features stories of real-life characters in Morocco. This document outlines the typography updates made to her site to align with her storytelling and professional persona.

---

## **Typography Objectives**
1. **Readability**: Ensure that text is easy to read on all devices and screen sizes.
2. **Aesthetics**: Use elegant fonts to complement the author’s creative and professional image.
3. **Accessibility**: Adapt typography to be accessible to a wide range of audiences, including those with visual impairments.

---

## **Changes Made**

### **Font Families**
- Incorporated Google Fonts for a professional and polished appearance:
  - **"Abril Fatface"**: Used for headings to create a bold, artistic impression.
  - **"Merriweather"**: Applied for captions and text requiring a serif style for an elegant touch.
  - **"Work Sans"**: Utilized for body text due to its clarity and modern look.
- Added a custom font, **"Croissant One"**, for the footer to give a unique, personal flair.

### **Font Sizes**
- Used responsive font sizes to adapt to different screen resolutions:
  - Default font size for the website: **18px** (scales down for smaller devices).
  - Banner heading (`h1`): **11rem**, dynamically reduced for smaller screens.
  - Body text (`p`): **1.5rem** with a comfortable line-height of **1.4**.

### **Text Styling**
- Applied bold and italic text sparingly to emphasize important details and captions.
- Integrated drop caps (`.first-letter`) in paragraphs for a dramatic start, enhancing the storytelling vibe.

### **Visual Hierarchy**
- Adjusted headings, captions, and quotes to clearly separate sections:
  - Blockquotes (`.quote`): Large, centered, and framed with decorative borders for a striking appearance.
  - Captions: Styled with italic text and a serif font to differentiate them from body content.

---

## **Code Implementation**

### **HTML**
The website links to Google Fonts and defines a clear structure for content, with semantic tags and appropriate classes for typography styling. Example:
```html
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital,wght@0,300;1,400&family=Work+Sans:wght@300;400&display=swap" rel="stylesheet">
```

### **CSS**
Typography-related styles are defined in `styles/style.css`:
```css
html {
  font-size: 18px;
}

.journal p {
  font-family: "Work Sans", sans-serif;
  font-size: 1.5rem;
  line-height: 1.4;
}

.banner h1 {
  font-family: "Abril Fatface", serif;
  font-size: 11rem;
  font-weight: 900;
}
```

---

## **Responsive Design**
Implemented responsive typography to maintain readability on various devices:
- Reduced font sizes for screens smaller than **1000px** and **680px**.
- Adjusted banner text and layout for better presentation on mobile screens.

---

## **Conclusion**
These typography improvements significantly enhance the readability and aesthetic appeal of Aoife Conleavy's website. The chosen fonts, sizes, and styling ensure that the site reflects her professionalism and creativity, making it inviting for readers and fans alike.

---
