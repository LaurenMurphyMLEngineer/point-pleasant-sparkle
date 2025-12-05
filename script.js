document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData(this);
    fetch("https://formsubmit.co/YOUR_EMAIL_HERE", {method:"POST", body:formData})
    .then(()=>{document.getElementById("formMessage").innerHTML="<p style='color:#FFD700;'>Thank you! We’ll contact you soon.</p>";this.reset();})
    .catch(()=>{document.getElementById("formMessage").innerHTML="<p style='color:red;'>Something went wrong.</p>";});
});

function calculatePrice(){
    const sqft = parseInt(document.getElementById("sqft").value)||0;
    const service = document.getElementById("serviceType").value;
    const beds = parseInt(document.getElementById("bedrooms").value)||0;
    const baths = parseInt(document.getElementById("bathrooms").value)||0;

    if(!sqft || !service){
        document.getElementById("priceResult").innerHTML="<span style='color:red;'>Enter sq ft & service.</span>";
        return;
    }

    let rate=0;
    if(service==="airbnb") rate=0.22;
    if(service==="summer") rate=0.25;
    if(service==="luxury") rate=0.35;
    if(service==="standard") rate=0.14;
    if(service==="deep") rate=0.24;
    if(service==="move") rate=0.27;

    let estimate = sqft*rate + beds*15 + baths*25;
    estimate = Math.ceil(estimate);

    // Apply 20% discount
    estimate = Math.round(estimate * 0.8);

    document.getElementById("priceResult").innerHTML = "Estimated Price: <strong>$"+estimate+"</strong>";
}