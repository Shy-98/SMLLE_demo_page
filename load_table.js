function createAudioHTML(path, flat) {
  if (flat) {
    return '<audio controls controlslist="nodownload" class="px-1" style="width: 36vw;"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}

function generateCrossTable(tableId, filenames, page, text) {
  let numPerPage = 5;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  // const prefix = 'music/edit_' + tableId + '/';
  const end_idx = Math.min(page * numPerPage, filenames.length);
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      // let reg = /[0-9]+/g;
      let command = filenames[i];
      // cell.innerHTML = command.replaceAll('_', ' ');
      cell.innerHTML = text[i]
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML('smlle_cross/'+filenames[i]+'.gt.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML('smlle_cross/'+filenames[i]+'.smlle.st.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('smlle_cross/'+filenames[i]+'.smlle.mel.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML('smlle_cross/'+filenames[i]+'.melle.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML('smlle_cross/'+filenames[i]+'.valle.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML('smlle_cross/'+filenames[i]+'.yourtts.wav', false);
      cell.style.textAlign = "center";
    } 
  }
}

// 洗牌函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(1024 * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

cross = ['237-126133-0010', '260-123286-0031', '1320-122617-0014', '2961-961-0016', '8555-284449-0020']
cross_txt = [
  'OH YOU ARE THE DEAREST AND BEST MISTER KING I EVER SAW BUT HOW DID YOU MAKE MAMMY LET HER COME', 
  'AS FOR THE ICHTHYOSAURUS HAS HE RETURNED TO HIS SUBMARINE CAVERN',
  'THEY DREW BACK A LITTLE FROM THE ENTRANCE AND MOTIONED TO THE SUPPOSED CONJURER TO ENTER',
  'I WILL BRIEFLY DESCRIBE THEM TO YOU AND YOU SHALL READ THE ACCOUNT OF THEM AT YOUR LEISURE IN THE SACRED REGISTERS',
  'THE COMBINED BANDS OF BOTH THE COUNTRIES PLAYED THE MUSIC AND A FINE SUPPER WAS SERVED'
]

generateCrossTable('cross', cross, 1, cross_txt)


$(document).ready(function() {
  for (let i = 1; i <= 1; i++) {
    let id = '#cross-' + i;
    $(id).click(function() {
      generateCrossTable(
          'cross',
          cross, i, cross_txt);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});
