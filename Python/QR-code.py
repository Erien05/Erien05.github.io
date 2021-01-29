import qrcode

def make_qr(filename, msg):
    img = qrcode.make(msg)
    img.save(filename)
    img.show()
    
#qr = qrcode.QRCode()
#qr.add_data("DIES IST EIN TEST!")
#img = qr.make_image()
#img.save("test.png")
make_qr("qrcodeJana.png", "https://erien05.github.io/Jana/index.html")
