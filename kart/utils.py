import threading


class StoppableThread(threading.Thread):
    def __init__(self, target):
        super().__init__()
        self._stop_event = threading.Event()
        self.target = target

    def stop(self):
        self._stop_event.set()

    def run(self):
        while not self._stop_event.is_set():
            self.target()
