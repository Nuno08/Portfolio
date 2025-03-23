<?php
// A saída será um PDF
header('Content-Type: application/pdf');

// Será chamado de downloaded.pdf
header('Content-Disposition: attachment; filename="NunoCV.pdf"');

// A fonte do PDF está em original.pdf
readfile('NunoCV.pdf');
?>