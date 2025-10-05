import qrcode

# URL que será convertida em QR Code
url = "https://mr-marcoss.github.io/conecta/"

# Gerar o QR Code
qr = qrcode.QRCode(
    version=1,  # tamanho do QR Code (1 é o menor)
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # nível de correção de erro
    box_size=10,  # tamanho de cada "caixinha"
    border=4,  # margem ao redor do QR
)

qr.add_data(url)
qr.make(fit=True)

# Criar a imagem
img = qr.make_image(fill_color="black", back_color="white")

# Salvar a imagem
img.save("qrcode_conecta.png")

print("QR Code gerado e salvo como 'qrcode_conecta.png'")
