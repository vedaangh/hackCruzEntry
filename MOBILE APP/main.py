from kivymd.app import MDApp
from kivy.lang import Builder
from kivy.core.window import Window
Window.size = (270,570)
class Test(MDApp):

    def build(self):
        self.theme_cls.primary_palette = "Teal"
        self.theme_cls.primary_hue = "200"

        return Builder.load_file("main.kv")
Test().run()