const textArray = [
    "Welcome to My Services",
    "Your One-Stop Solution for Tech",
    "Expert OS Installation"
  ];
  
  let currentIndex = 0;
  let currentText = '';
  let isDeleting = false;
  const changingTextElement = document.getElementById('changingText');
  const typingSpeed = 100; // Adjust the typing speed here
  const deletingSpeed = 50; // Adjust the deleting speed here
  const pauseDuration = 2000; // Pause between sentences
  
  // Function to type and delete text
  function typeWriter() {
    const targetText = textArray[currentIndex];
    
    if (isDeleting) {
      currentText = targetText.substring(0, currentText.length - 1);
    } else {
      currentText = targetText.substring(0, currentText.length + 1);
    }
  
    changingTextElement.textContent = currentText;
  
    if (!isDeleting && currentText === targetText) {
      // When typing is complete, pause before deleting
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, pauseDuration);
    } else if (isDeleting && currentText === '') {
      // When deletion is complete, move to next text
      isDeleting = false;
      currentIndex = (currentIndex + 1) % textArray.length;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Keep typing or deleting
      setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    }
  }
  
  // Start the typewriter effect
  typeWriter();
  