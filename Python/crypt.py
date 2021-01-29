import os
from tkinter import *
from tkinter import filedialog
import tkinter
import getpass
# Need this for the `os.path.split` function


root = Tk()
user = getpass.getuser()

# Get the file
#file = tkinter.filedialog.askopenfilename(initialdir='C:/Users/%s' % user)

def equalize(path_1, path_2):
    dat1 = open(path_1, "rb").read()
    dat2 = open(path_2, "rb").read()
    l_dat1 = len(dat1)
    l_dat2 = len(dat2)
    if l_dat1 > l_dat2:
        dat2 += os.urandom(l_dat1 - l_dat2)
    else:
        dat1 += os.urandom(l_dat2 - l_dat1)
    with open(path_1, "wb") as out:
        out.write(dat1)
    with open(path_2, "wb") as out:
        out.write(dat2)

"""orig_path, enc_path,"""
def keygenExtends(key_path):
    
    try:
        if key_path == ".key":
            change_btn("Keinen Namen eingegeben", "red")
            return
    
        #orig_path = filedialog.askopenfilename(parent=root, title="zu Verschlüsselnde Datei wählen.")
        orig_path = filedialog.askopenfilename(initialdir='C:/Users/%s' % user, title="zu Verschlüsselnde Datei wählen.")
        enc_path = filedialog.askopenfilename(initialdir='C:/Users/%s' % user, title="Datei mit der Verschlüsselt werden soll wählen.")
        
        equalize(orig_path, enc_path)
        original = open(orig_path, "rb").read()
        encrypted = open(enc_path, "rb").read()
        key = bytes(a ^ b for (a, b) in zip(original, encrypted))
        with open(key_path, "wb") as key_out:
            if True:    #überprüfen ob die angegebene datei entschlüsselt wurde
                change_btn("Erfolgreich Verschlüsselt!", "green")
            else:
                change_btn("Keine Dateien ausgewählt.", "red")
            key_out.write(key)
        #os.remove(orig_path)
    except:
        change_btn("Keine Dateien ausgewählt.", "red")        
        
        
"""enc_path, key_path, """
def decryptExtends(dec_path):
    try:
        if dec_path == "":
            change_btn("Keinen Namen eingegeben", "red")
            return
    
        enc_path = filedialog.askopenfilename(initialdir='C:/Users/%s' % user, title="Verschlüsselte Datei wählen.")
        key_path = filedialog.askopenfilename(initialdir='C:/Users/%s' % user, title="Schlüssel Datei wählen.")
        encrypted = open(enc_path, "rb").read()
        key = open(key_path, "rb").read()
        decrypted = bytes(a ^ b for (a, b) in zip(encrypted, key))
        with open(dec_path, "wb") as decrypted_out:
            if True:
                change_btn("Erfolgreich Entschlüsselt!", "green")
            else:
                change_btn("Keine Dateien ausgewählt.", "red")
            decrypted_out.write(decrypted)
        
    except:
        change_btn("Keine Dateien ausgewählt.", "red")
        
"""filename"""
def encrypt():
    try:
        filename = filedialog.askopenfilename(initialdir='C:/Users/%s' % user, title="zu Verschlüsselnde Datei wählen.")
        to_encrypt = open(filename, "rb").read()
        size = len(to_encrypt)
        key = os.urandom(size)
        with open(filename + ".key", "wb") as key_out:
            key_out.write(key)
        encrypted = bytes(a ^ b for (a, b) in zip(to_encrypt, key))
        with open(filename, "wb") as encrypted_out:
            encrypted_out.write(encrypted)
        change_btn("Erfolgreich Verschlüsselt!", "green")
    except:
        change_btn("Keine Dateien ausgewählt.", "red")
        

"""filename, key"""
def decrypt():
    try:
        filename = filedialog.askopenfilename(initialdir='C:/Users/%s' % user, title="Verschlüsselte Datei wählen.")
        key = filedialog.askopenfilename(initialdir='C:/Users/%s' % user, title="Schlüssel Datei wählen.")
        
        file = open(filename, "rb").read()
        key = open(key, "rb").read()
        decrypted = bytes(a ^ b for (a, b) in zip(file, key))
        with open(filename, "wb") as decrypted_out:
            decrypted_out.write(decrypted)
        change_btn("Erfolgreich Entschlüsselt!", "green")
    except:
        change_btn("Keine Dateien ausgewählt.", "red")



def GUI():
    # Erstellt den "Hintergrund"
    root.title('Ver- und Entschlüsselung')
    root.geometry("540x720")
    root.resizable(True, True)
    
    information_textBlanck = Label(root, text="\nMithilfe von One-Time Pad Verschlüsseln\n")
    information_textBlanck.pack(side=TOP)
    
    b = Button(root, command=lambda: encrypt(), height=5, width=50, text="Verschlüsseln", bg="#378dae", activebackground="#3d9dc2")
    b.pack(pady=2)
    
    b2 = Button(root, command=lambda: decrypt(), height=5, width=50, text="Entschlüsseln", bg="#378dae", activebackground="#3d9dc2")
    b2.pack(pady=2)
    
    
    information_textBlanck = Label(root, text="\n\n\n\nMithilfe von einer anderen Datei Verschlüsseln")
    information_textBlanck.pack(side=TOP)
    
    
    # Text über dem Eingabe-Feld
    information_text = Label(root, text="\nName des Schlüssels")
    information_text.pack(side=TOP)
    # Eingabe-Feld für den Namen der PDF
    name_input = Entry(root, bd=5)
    name_input.pack(side=TOP)
    # Button, welcher die merge_pdfs() Funktion aufruft.
    b3 = Button(root, command=lambda: keygenExtends(name_input.get()+".key"), height=5, width=50, text="Verschlüsseln", bg="#378dae", activebackground="#3d9dc2")
    b3.pack(pady=2)    
    
    information_textBlanck2 = Label(root, text="")
    information_textBlanck2.pack(side=TOP)
    
    information_text2 = Label(root, text="Name der Entschlüsselten Datei \nplus Dateiendung")
    information_text2.pack(side=TOP)
    name_input2 = Entry(root, bd=5)
    name_input2.pack(side=TOP)
    
    b4 = Button(root, command=lambda: decryptExtends(name_input2.get()), height=5, width=50, text="Entschlüsseln", bg="#378dae", activebackground="#3d9dc2")
    b4.pack(pady=2)
    
    root.mainloop()


# Button, welcher später noch abgeändert wird, um den Benutzer über den Status des Programms zu informieren.
output = Label(root, text="", fg="white")


# Eine Funktion, um den Text sowie die Farbe des output Buttons zu ändern.
def change_btn(output_text, colour):
    output['text'] = output_text
    output['fg'] = colour
    output.pack(side=BOTTOM)
        
        
        
GUI()
