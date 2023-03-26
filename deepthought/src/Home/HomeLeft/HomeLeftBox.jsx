import React from 'react'
import "./HomeLeft.css"
function HomeLeftBox() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("list").style.display = "block";
    document.getElementById("clsbtn").style.display = "block";
    document.getElementById("clsbtn").style.display = "flex";
    document.getElementById("opnbtn").style.display = "none";
    document.getElementById("box_1").style.display = "none";
    document.getElementById("heading").style.display = "block";



  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "10%";
    document.getElementById("list").style.display = "none";
    document.getElementById("clsbtn").style.display = "none";
    document.getElementById("opnbtn").style.display = "block";
    document.getElementById("box_1").style.display = "block";
    document.getElementById("heading").style.display = "none";

  }

  return (
    <div id="mySidenav" class="sidenav">
      <div className='left_container_header'>
        <h3 id='heading'>Juorny Board</h3>
        <button href="javascript:void(0)" class="closebtn" id='clsbtn' onClick={() => closeNav()}>
          <span> &#x2190;</span>
        </button>
        <button style={{ fontSize: "30px;cursor:pointer" }} class="openbtn" id='opnbtn' onClick={() => openNav()}>
          <span >&#x2192;</span>
        </button>
      </div>

      <div id='list'>
        <ul className='list_item'><li>Explore the world of management</li></ul>
        <ul >
          <li>Technical Project Management</li>
          <li>Threadbuild</li>
          <li>Structure you pointers</li>
          <li>4SA Method</li>
        </ul>
      </div>

      <div className='box_1' id='box_1'>
        <h1>1</h1>
      </div>

    </div>
  )
}

export default HomeLeftBox