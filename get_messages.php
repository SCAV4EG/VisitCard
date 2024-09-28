<?php
// Чтение всех сообщений из файла
if (file_exists('chat.txt')) {
    echo nl2br(file_get_contents('chat.txt'));
} else {
    echo "No messages yet.";
}
?>
