Event loop

NodeJS sẽ liên tục tạo ra các event 

Output
```
event-loop: 0.567ms
hello
immediate
world
```

1. The EventLoop proceeds to run the timer callbacks and discovers that the timer has completed and is now ready to run. As a result, it executes the timer i.e. setTimeout. In the console, we see “hello”.
2. After that, the EventLoop moves on to the I/O callbacks stage. At this point, the file reading process is finished, but its callback is not yet marked to be executed because IO callbacks get queued up only at the IO polling step. That means even if the file reading is done the IO queue will still be empty as unless and until event loop comes at IO polling step the callback wont be inserted into IO queue. At this point, the readFile() callback event is collected and added to the I/O queue, but it still doesn’t get executed yet.
It’s ready for execution, but EventLoop will execute it in the next cycle.
3. Moving on to the next phase, EventLoop executes the setImmediate() callback. In the console, we see “immediate”.
4. The EventLoop then starts over again. Since there are no timers to execute, it moves to the “Call pending callback stage”, where it finally finds and runs the readFile() callback. In the console, we see “world”.