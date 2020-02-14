import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Pagina From Python - ServerLess")

def make_app():
    return tornado.web.Application([(r"/", MainHandler),(r"/admin/", MainHandler)])

app = make_app()
app.listen(80)
tornado.ioloop.IOLoop.current().start()