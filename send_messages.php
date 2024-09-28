<?php
// Проверяем, было ли отправлено сообщение
if (isset($_POST['message'])) {
    $message = htmlspecialchars($_POST['message']); // Защита от XSS

    // Записываем сообщение в файл
    file_put_contents('chat.txt', $message . "\n", FILE_APPEND);
}
?>
