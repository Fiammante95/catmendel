$('#dropzone').on(
    'dragover',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("eh");
    }
)
$('#dropzone').on(
    'dragenter',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)
$('#dropzone').on(
    'drop',
    function(e){
        if(e.originalEvent.dataTransfer){
            if(e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();
                /*UPLOAD FILES HERE*/
                upload(e.originalEvent.dataTransfer.files);
            }   
        }
    }
);
function upload(files){
    alert('Upload '+files.length+' File(s).');
}