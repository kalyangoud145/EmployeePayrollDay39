  
window.addEventListener('DOMContentLoaded',(event)=>
{
    createInnerHtml();
});

var createInnerHtml=()=>
{
    const headerHtml= "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
    //using template literal
    var innerHTML= `${headerHtml}
    <tr>
        <td>
            <img class="profile" alt="" src="../assets/profile-images/Ellipse -8.png">
        </td>
        <td>Ravula kalyan goud</td>
        <td>Male</td>
        <td>
            <div class='dept-label'>HR</div>
            <div class="dept-label">Engineering</div>
        </td>
        <td>444444</td>
        <td>18 September 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML=innerHTML;
}