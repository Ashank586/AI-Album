var images=["Ashank.jpg","Alok_Kumar_and_Pooja_Priti.jpg"];
var names=["Ashank Vatsa","Alok Kumar and Pooja Priti"];

var i=0
function update_pn()
{
    i++
    var number_of_family_members_array="1";
    if(i>number_of_family_members_array)
    {
        i=0
    }
    var updated_image=images[i];
    var updated_name=names[i];
    document.getElementById("family_i").src=updated_image;
    document.getElementById("image_scr..").innerHTML=updated_name;
}