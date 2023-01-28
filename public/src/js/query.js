import { app, db, auth, collection, getDoc, getDocs,
  addDoc, onSnapshot, query, where, doc,
  updateDoc, deleteDoc, signOut 
} from './firebase';
import { dateValidation } from './validation'

auth.onAuthStateChanged(user =>{
  if(user){
      const uid = user.uid;
      console.log(uid);
  }else{
    window.location.href = "/index.html";
  }
})

const colRefD = collection(db, 'deceased');
const colRefA = collection(db, 'archive');

let addBtn = document.getElementById("createNewRecord");
const allTable = $('#allRecordsTable');
const aptTable = $('#aptRecordsTable');
const lawnTable = $('#lwnRecordsTable');
const bvTable = $('#bvRecordsTable');
// const arcTable = $('#aptRecordstable');
// const getData = await getDocs(colRef);

// onSnapshot(colref,snapshot =>{
//   let realtime = snapshot.docChanges();
//   realtime.forEach(change=>{

//   })
// })
const q = query(colRefD, where("gravetype", "==", "apartment"));
const q1 = query(colRefD, where("gravetype", "==", "lawn"));
const q2 = query(colRefD, where("gravetype", "==", "bonevault"));

onSnapshot(colRefD,snapshot => {
  let realtime = snapshot.docChanges()
  realtime.forEach(change=>{
    if(change.type == "added"){
      renderAllData(change.doc);
    }
    else if(change.type == "modified"){
      var id = document.getElementById(change.doc.id);
       $('#'+ id).remove();
      renderAllData(change.doc);
    }
  })
})
onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
        renderAptData(change.doc);
    }
    else if(change.type == "modified"){
      var id = document.getElementById(change.doc.id);
       $('#'+id).remove();
       renderAptData(change.doc);
    }
  });
});
onSnapshot(q1, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
        renderLawnData(change.doc);
    }
    else if(change.type == "modified"){
      var id = document.getElementById(change.doc.id);
       $('#'+id).remove();
       renderLawnData(change.doc);
    }
  });
});
onSnapshot(q2, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
       renderBvData(change.doc);
    }
    else if(change.type == "modified"){
      var id = document.getElementById(change.doc.id);
       $('#'+id).remove();
       renderBvData(change.doc);
    }
  });
});
//All table realtime display
function renderAllData(doc){
  allTable.append(`<tr>
                      <td><input type="checkbox" class="checkbox" /></td>
                        <td id="${doc.id}">${doc.id}</td>
                        <td class="string-body-sort">${doc.data().firstname} ${doc.data().lastname}</td>
                        <td class="bdate-body-sort">${doc.data().birthdate}</td>
                        <td class="ddate-body-sort">${doc.data().deathdate}</td>
                        <td class="string-body-sort"><div id="${doc.data().gravetype}-ID">${doc.data().gravetype}</div></td>
                        <td class="string-body-sort">Block ${doc.data().block},${doc.data().column}${doc.data().row}</td>
                        <td class="action-buttons">
                        <button
                          class="show-button button"
                          onclick="openDetailedViewOverlay()"
                        >
                          <i class="bx bx-show"></i>
                        </button>

                        <button
                          class="edit-button button"
                          onclick="openEditOverlay(), showEditRecord()" 
                          id="${doc.id}"
                        >
                          <i class="bx bxs-edit-alt"></i>
                        </button>

                        <button

                          class="archive-button button"
                          onclick="openArchiveOverlay()"
                          id="${doc.id}"
                          >
                          <i class="bx bx-archive-in"></i>
                        </button>
                      </td>
                    </tr>`);
                    editField();
                    archiveOne();
                    
}
function renderAptData(doc){
  aptTable.append(`<tr>
                      <td><input type="checkbox" class="checkbox" /></td>
                        <td>${doc.id}</td>
                        <td class="string-body-sort">${doc.data().firstname} ${doc.data().lastname}</td>
                        <td class="bdate-body-sort">${doc.data().birthdate}</td>
                        <td class="ddate-body-sort">${doc.data().deathdate}</td>
                        <td class="string-body-sort"><div class="chip orange-chip">${doc.data().gravetype}</div></td>
                        <td class="string-body-sort">Block ${doc.data().block},${doc.data().column}${doc.data().row}</td>
                        <td class="action-buttons">
                        <button
                          class="show-button button"
                          onclick="openDetailedViewOverlay()"
                        >
                          <i class="bx bx-show"></i>
                        </button>

                        <button
                          class="edit-button button"
                          onclick="openEditOverlay()" 
                          id="${doc.id}"
                        >
                          <i class="bx bxs-edit-alt"></i>
                        </button>

                        <button

                          class="archive-button button"
                          onclick="openArchiveOverlay()"
                          id="${doc.id}"
                          >
                          <i class="bx bx-archive-in"></i>
                        </button>
                      </td>
                    </tr>`);
                    editField();
}
function renderLawnData(doc){
  lawnTable.append(`<tr>
                      <td><input type="checkbox" class="checkbox" /></td>
                        <td>${doc.id}</td>
                        <td class="string-body-sort">${doc.data().firstname} ${doc.data().lastname}</td>
                        <td class="bdate-body-sort">${doc.data().birthdate}</td>
                        <td class="ddate-body-sort">${doc.data().deathdate}</td>
                        <td class="string-body-sort"><div class="chip green-chip">${doc.data().gravetype}</div></td>
                        <td class="string-body-sort">Block ${doc.data().block},${doc.data().column}${doc.data().row}</td>
                        <td class="action-buttons">
                        <button
                          class="show-button button"
                          onclick="openDetailedViewOverlay()"
                        >
                          <i class="bx bx-show"></i>
                        </button>

                        <button
                          class="edit-button button"
                          onclick="openEditOverlay()" 
                          id="${doc.id}"
                        >
                          <i class="bx bxs-edit-alt"></i>
                        </button>

                        <button

                          class="archive-button button"
                          onclick="openArchiveOverlay()"
                          id="${doc.id}"
                          >
                          <i class="bx bx-archive-in"></i>
                        </button>
                      </td>
                    </tr>`);
                    editField();
}
function renderBvData(doc){
  bvTable.append(`<tr>
                      <td><input type="checkbox" class="checkbox" /></td>
                        <td>${doc.id}</td>
                        <td class="string-body-sort">${doc.data().firstname} ${doc.data().lastname}</td>
                        <td class="bdate-body-sort">${doc.data().birthdate}</td>
                        <td class="ddate-body-sort">${doc.data().deathdate}</td>
                        <td class="string-body-sort"><div class="chip red-chip">${doc.data().gravetype}</div></td>
                        <td class="string-body-sort">Block ${doc.data().block},${doc.data().column}${doc.data().row}</td>
                        <td class="action-buttons">
                        <button
                          class="show-button button"
                          onclick="openDetailedViewOverlay()"
                        >
                          <i class="bx bx-show"></i>
                        </button>

                        <button
                          class="edit-button button"
                          onclick="openEditOverlay()" 
                          id="${doc.id}"
                        >
                          <i class="bx bxs-edit-alt"></i>
                        </button>

                        <button
                          class="archive-button button"
                          onclick="openArchiveOverlay()"
                          id="${doc.id}"
                          >
                          <i class="bx bx-archive-in"></i>
                        </button>
                      </td>
                    </tr>`);
                    editField();
}
// function renderArchData(doc){
//   arcTable.append(`<tr>
//                       <td><input type="checkbox" class="checkbox" /></td>
//                         <td>${doc.id}</td>
//                         <td class="string-body-sort">${doc.data().firstname} ${doc.data().lastname}</td>
//                         <td class="string-body-sort">${doc.data().birthdate}</td>
//                         <td class="string-body-sort">${doc.data().deathdate}</td>
//                         <td class="string-body-sort"><div class="chip orange-chip">${doc.data().gravetype}</div></td>
//                         <td class="string-body-sort">Block ${doc.data().block},${doc.data().column}${doc.data().row}</td>
//                         <td class="action-buttons">
//                         <button
//                           class="show-button button"
//                           onclick="openDetailedViewOverlay()"
//                         >
//                           <i class="bx bx-show"></i>
//                         </button>

//                         <button
//                           class="edit-button button"
//                           onclick="openEditOverlay()" 
//                           id="${doc.id}"
//                         >
//                           <i class="bx bxs-edit-alt"></i>
//                         </button>

//                         <button

//                           class="archive-button button"
//                           onclick="openArchiveOverlay()"
//                           id="${doc.id}"
//                           >
//                           <i class="bx bx-archive-in"></i>
//                         </button>
//                       </td>
//                     </tr>`);
// }

const addForm = document.querySelector('.createRecord');
$("#createForm").on('submit',(e) =>
{
  console.log("test");
  e.preventDefault()
  if(dateValidation == false){
    console.log("success");
    addDoc(colRefD, {
      firstname: addForm.firstname.value,
      lastname: addForm.lastname.value,
      birthdate: addForm.birthdate.value,
      deathdate: addForm.deathdate.value,
      gravetype: addForm.gravetype.value,
      block: addForm.block.value,
      column: addForm.column.value,
      row: addForm.row.value,
    })
    .then(() =>
      addForm.reset()
    ).catch(()=>
    alert("error"+ error))
  }else{
    alert("Birth date cannot be less than Death date")
    e.preventDefault();
  }
})

 async function editField(){
  $(".edit-button").on('click', async function(e){
    console.log("working");
    e.stopImmediatePropagation();
    var id = this.id
    const docRef = doc(db, "deceased", id);
    const docSnap = await getDoc(docRef);
    
    if(docSnap.exists())
    {
      $('#first-name').val(docSnap.data().firstname);
      $('#last-name').val(docSnap.data().lastname);
      $('#birth-date').val(docSnap.data().birthdate);
      $('#death-date').val(docSnap.data().deathdate);
      $('#grave-type-input').val(docSnap.data().gravetype);
      $('#block-input').val(docSnap.data().block);
      $('#column-input').val(docSnap.data().column);
      $('#row-input').val(docSnap.data().row);
      $('#collectionId').val(id);
    }
  })
}

$('#updateRecord').on('click', async function(){
  var id = $('#collectionId').val();
  console.log(id);
  const docSnap = doc(db, "deceased", id);
  await updateDoc(docSnap,{
    firstname: addForm.firstname.value,
    lastname: addForm.lastname.value,
    birthdate: addForm.birthdate.value,
    deathdate: addForm.deathdate.value,
    gravetype: addForm.gravetype.value,
    block: addForm.block.value,
    column: addForm.column.value,
    row: addForm.row.value,
  })
})

function archiveOne() {
  $(".archive-button").on('click', async function(e){
    var id = this.id;
    e.stopImmediatePropagation();
    const docRef = doc(db, "deceased", id);
    const docSnap = await getDoc(docRef);

    var firstName = docSnap.data().firstname;
    var lastName = docSnap.data().lastname;
    var birthDate = docSnap.data().birthdate;
    var deathDate = docSnap.data().deathdate;
    var graveType = docSnap.data().gravetype;
    var dateArchived = "Javascript that takes the exact date and time";
    //need to create archive database
    //separating graveType block,column,row from deceased collection
    //create Grave collection
    console.log(firstName+lastName+birthDate);
    // await addDoc(colRefA, {
    //   firstname: firstName,
    //   lastname: lastName,
    //   birthdate: birthdate,
    //   deathdate: deathdate,
    // })
  })
}
// $('').on('click', async function(){
//   var id = $('#collectionId').val();
//   const docSnap = doc(db, "deceased", id);
   
//     addDoc(colRefA, {
//       firstname: addForm.firstname.value,
//       lastname: addForm.lastname.value,
//       birthdate: addForm.birthdate.value,
//       deathdate: addForm.deathdate.value,
//       gravetype: addForm.gravetype.value,
//       block: addForm.block.value,
//       column: addForm.column.value,
//       row: addForm.row.value,
//     }).then(()=>
//     deleteDoc(docSnap));
// })
$("#logout-button").on("click", (e)=>{
  signOut(auth).then(() => {
  }).catch((error) => {
      console.log(error);
  });
})
