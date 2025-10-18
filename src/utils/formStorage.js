// Utility function to save form data to JSON file
export const saveFormData = async (formData) => {
  try {
    // Add timestamp to the form data
    const dataWithTimestamp = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };

    // Convert to JSON string
    const jsonData = JSON.stringify(dataWithTimestamp, null, 2);
    
    // Create a blob with the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contact-form-${dataWithTimestamp.id}.json`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
    
    console.log('Form data saved to JSON file:', dataWithTimestamp);
    return true;
  } catch (error) {
    console.error('Error saving form data:', error);
    return false;
  }
};

// Alternative function to save multiple submissions to a single file
export const saveToLocalStorage = (formData) => {
  try {
    const dataWithTimestamp = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };

    // Get existing submissions from localStorage
    const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    
    // Add new submission
    existingSubmissions.push(dataWithTimestamp);
    
    // Save back to localStorage
    localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions, null, 2));
    
    console.log('Form data saved to localStorage:', dataWithTimestamp);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

// Function to download all submissions as JSON
export const downloadAllSubmissions = () => {
  try {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const jsonData = JSON.stringify(submissions, null, 2);
    
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `all-contact-submissions-${new Date().toISOString().split('T')[0]}.json`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error('Error downloading submissions:', error);
    return false;
  }
};
