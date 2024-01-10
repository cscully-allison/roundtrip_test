from IPython.core.magic import Magics, magics_class, line_magic
from roundtrip.manager import Roundtrip as RT

@magics_class
class MyRTVis(Magics):
  def __init__(self, shell):
    super(MyRTVis, self).__init__(shell)
    self.shell = shell


  @line_magic
  def canvas_color(self, line):
      # load files
      args = line.split(" ")

      # Original Canvas Color Example
      RT.load_web_files(["canvas_color.html", "canvas_color.js"])


      RT.initialize()

  @line_magic
  def stacked(self, line):
      # load files
      args = line.split(" ")

      # Stacked JS example
      RT.load_web_files(["stacked.css", "stacked.js"])
      RT.data_to_js('whatever', 'chart_type')
      RT.data_to_js([1,2,3], 'data_arr')
      RT.data_to_js({}, 'opt')
      RT.data_to_js(100, 'width')
      RT.data_to_js(100, 'height')
      
      RT.initialize()


def load_ipython_extension(ipython):
    ipython.register_magics(MyRTVis)  