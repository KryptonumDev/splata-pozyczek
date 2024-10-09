// export const trackCampaigns = ({ debug=false, reset=false } = {}) => {
//   saveCampaignIntoSession({reset, debug});
//   updateHiddenFields({debug});
// };

export const saveCampaignIntoSession = ({ debug, reset }) => {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);

  for (const [key, value] of params.entries()) {
    if (debug) {
      console.log(`${key}: ${value}`);
    }
    if (reset || sessionStorage.getItem(key) === null) {
      sessionStorage.setItem(key, decodeURIComponent(value));
    }
  }
};

export const updateHiddenFields = ({ debug }) => {
  const hiddenFields = document.querySelectorAll("input[type=hidden], input[type=text]");

  for (const field of hiddenFields) {
    const param = sessionStorage.getItem(field.name);
    if (param) {
      if (debug) {
        console.log(`${field.name}: ${field.name}`);
        console.log(`param: ${param}`);
      }
      field.value = param;
      if (debug) {
        console.log(`field.value: ${field.value}`);
      }
    }
  }
};


