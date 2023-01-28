export function dateValidation() {
    let bolean = false;
    
    if($("#birthdate") < $("#deathdate")){
        return true;
    }else
    {
        return false;
    }
}


