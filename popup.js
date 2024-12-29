// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: toggleDarkMode,
      },
      (results) => {
        if (chrome.runtime.lastError) {
          console.error("Script injection failed:", chrome.runtime.lastError);
        } else {
          console.log("Script injected successfully");
          updatePopupUI(results[0].result);
        }
      }
    );
  });
});

function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  if (isDarkMode) {
    const style = document.createElement("style");
    style.id = "dark-mode-style";
    style.innerHTML = `
        body.dark-mode {
          background-color: #121212;
          color: #ffffff;
        }
        a {
          color: #bb86fc;
        }
      `;
    document.head.appendChild(style);
  } else {
    const style = document.getElementById("dark-mode-style");
    if (style) {
      style.remove();
    }
  }
  return isDarkMode;
}

function updatePopupUI(isDarkMode) {
  const button = document.getElementById("toggleDarkMode");
  const icon = button.querySelector(".icon");
  const text = button.querySelector(".text");

  if (isDarkMode) {
    icon.textContent = "☀️";
    text.textContent = "Disable Dark Mode";
  } else {
    icon.textContent = "🌙";
    text.textContent = "Enable Dark Mode";
  }
}

// CS50 Search
document.getElementById("searchCS50").addEventListener("click", () => {
  const query = document.getElementById("searchQuery").value;
  if (query) {
    chrome.tabs.create({
      url: `https://www.edx.org/search/?q=${encodeURIComponent(query)}`,
    });
  }
});
