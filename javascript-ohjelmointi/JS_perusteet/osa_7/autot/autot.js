class Auto {
    constructor(rekisterinumero, valmistaja, malli, omistaja, hinta, vari) {
      this.rekisterinumero = rekisterinumero;
      this.valmistaja = valmistaja;
      this.malli = malli;
      this.omistaja = omistaja;
      this.hinta = hinta;
      this.vari = vari;
    }
  

    getDetails() {
      return {
        rekisterinumero: this.rekisterinumero,
        valmistaja: this.valmistaja,
        malli: this.malli,
        omistaja: this.omistaja,
        hinta: this.hinta,
        vari: this.vari
      };
    }
  }
  
  function addAutoToUI(auto) {
    let autosArray = document.getElementById("autosArray");
  
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `
      Rekisterinumero: ${auto.rekisterinumero}<br>
      Valmistaja: ${auto.valmistaja}<br>
      Malli: ${auto.malli}<br>
      Omistaja: ${auto.omistaja}<br>
      Hinta: ${auto.hinta}<br>
      Väri: ${auto.vari}<br><br>
    `;
  
    autosArray.appendChild(paragraph);
  }
  
  function updateAutosArrayUI() {
    let autosArray = document.getElementById("autosArray");
  
    autosArray.innerHTML = "";
  
    autos.forEach(auto => {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = `
        Rekisterinumero: ${auto.rekisterinumero}<br>
        Valmistaja: ${auto.valmistaja}<br>
        Malli: ${auto.malli}<br>
        Omistaja: ${auto.omistaja}<br>
        Hinta: ${auto.hinta}<br>
        Väri: ${auto.vari}<br><br>
      `;
  
      autosArray.appendChild(paragraph);
    });
  }
  
  function addAuto() {
    let rekisterinumero = document.getElementById("rekisterinumero").value;
    let valmistaja = document.getElementById("valmistaja").value;
    let malli = document.getElementById("malli").value;
    let omistaja = document.getElementById("omistaja").value;
    let hinta = parseFloat(document.getElementById("hinta").value);
    let vari = document.getElementById("vari").value;
  
    let auto = new Auto(rekisterinumero, valmistaja, malli, omistaja, hinta, vari);
    autos.push(auto);
    addAutoToUI(auto);
    updateAutosArrayUI(); 
  }
  
  let autos = [];

  function searchAutoByRekisterinumero(rekisterinumero) {
    let foundAuto = autos.find(auto => auto.rekisterinumero === rekisterinumero);
  
    if (foundAuto) {
      return foundAuto;
    } else {
      return null; 
    }
  }
  
  function searchAutoAndDisplay() {
    let rekisterinumero = document.getElementById("searchRekisterinumero").value;
  
    try {
      let foundAuto = searchAutoByRekisterinumero(rekisterinumero);
  
      let searchResultDiv = document.getElementById("searchResult");
      searchResultDiv.innerHTML = ""; 
  
      if (foundAuto) {
        let details = document.createElement("p");
        details.innerHTML = `
          Valmistaja: ${foundAuto.valmistaja}<br>
          Malli: ${foundAuto.malli}<br>
          Omistaja: ${foundAuto.omistaja}<br>
        `;
        searchResultDiv.appendChild(details);
      } else {
        let message = document.createElement("p");
        message.textContent = "Autoa ei löytynyt rekisterinumerolla: " + rekisterinumero;
        searchResultDiv.appendChild(message);
      }
    } catch (error) {
      let errorMessage = document.createElement("p");
      errorMessage.textContent = "Virhe: " + error.message;
      searchResultDiv.appendChild(errorMessage);
    }
  }
  