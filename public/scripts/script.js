let  elem = document.getElementById("canvasContainer");  
// if (window.innerWidth>=768){                                                                                                                                                                                                                                                                                                                                                                                            elem = document.getElementById('canvas3d');
//     // var primeWorker = new Worker('/scripts/gltfLoader.js');
//     // var app = new SpeRuntime.Application();
//     // app.start("scripts/scene.gltf");
//     // window.onload=()=>{
//     // console.log("still running");
//     elem.style.width = "75%";
//     elem.style.height = "75%";
//     console.log("windows");
//     }else{
//         var myInterval = setInterval(afterload, 1000);
//         function afterload() {
//             try{
//                 document.getElementById("canvas3d").remove();
//                 var c = document.getElementById ("canvasContainer");
//                 // Create an element <video>
//                 var v = document.createElement("video");
//                 // Set the attributes of the video
//                 v.src = "./assets/robo.mp4";
//                 v.autoplay = true;
//                 v.loop = true;
//                 v.muted = true;
//                 v.type="video/mp4";
                
//                 // Add the video to <div>
//                 c.appendChild(v);
//                 stopAfterload();
//             }catch(err) {
            
//             }
//         }
//     }
// function stopAfterload() {
//     clearInterval(myInterval);
// }
