document.getElementById('create').addEventListener("click", create_new_patient);

class Patient{
    constructor(fname,lname,gender,bdate){
        this.id = 1//get_new_id(1) //this has to be changed with new available ID function from cloud 
        this.fname = fname;
        this.lname = lname; 
        this.gender = gender;
        this.bdate = bdate;
        this.age = 10; //this has to be changed beacuse has to change every year automatically      
    }
}

function get_new_id(id){
    return id++;
}

function create_new_patient(){
    var new_patient = new Patient(document.getElementById('fname').value,
                                  document.getElementById('lname').value,
                                  document.getElementById('gender').value,
                                  document.getElementById('bdate').value);
    window.alert(new_patient.fname + new_patient.lname + new_patient.gender + new_patient.bdate);
}