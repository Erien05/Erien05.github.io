from selenium import webdriver

class AutoAnmelden:
    def __init__(self, mail, pw):
        self.driver = webdriver.Firefox(executable_path="C:\\Anmeldebot\\geckodriver.exe")
        self.driver.get("https://www.gmx.net/#.pc_page.anmelden.index.hero_1.homepage")
       
        self.driver.find_element_by_xpath("//input[@name=\"username\"]").send_keys(mail)
        self.driver.find_element_by_xpath("//input[@name=\"password\"]").send_keys(pw)
        
        self.driver.find_element_by_xpath("/html/body/div[2]/div/div[1]/div/section[2]/div/form/button").click()
        # oder
        # self.driver.find_element_by_xpath("//a[contains(text(), 'Login')]").click()

        #self.driver.find_element_by_xpath("/html/body/div[3]/div[1]/div[3]/div[1]/ul/li[2]/a").click()
        self.driver.find_element_by_xpath("/html/body/atlas-app/atl-navbar/atl-actions-menu/div[1]/div[1]/atl-menu-item[2]/pos-icon-item/span/unhtz3")

        #self.driver.find_element_by_xpath("/html/body/div[2]/div[3]/div[2]/div[2]/div/div[2]/div[1]/ul/li[2]/div/a/span")
        #self.driver.get("https://navigator.gmx.net/mail?sid=9a3ac172fcd44b4f42d92474ef6a0cce55bc54a36efe244df27a5cdd2eaff352930dc7cca075dbc6be040f3e1d56b96e")

AutoAnmelden("richter.jana.2706@gmx.de", "A la gare a Montpellier.")