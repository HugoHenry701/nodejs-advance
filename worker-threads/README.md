
# Phân biệt process và thread

- Process là một chương trình thực thi và sẽ yêu cầu tài nguyên để thực hiện.
- 1 Process có thể có nhiều thread.
- Thread là 1 luồng xử lý và có thể coi như một process nhỏ.
- Thread sẽ chia sẻ tài nguyên, bộ nhớ chung trong process và có thể tạo ra mà không cần yêu cầu thêm bộ nhớ.

# Multithread

Multithread là khái niệm cho phép một process có thể thực hiện nhiều công việc trên nhiều thread chạy song song và kết quả giữa các thread không ảnh hưởng đến kết quả chung.

# Worker thread

Nodejs là một ngôn ngữ single thread, tuy nhiên để phục vụ mục đích multithread thì nodejs có khái niệm worker thread để xử lý đa luồng.

Worker thread 

# Output:

```
I should run immediately
Writing database....
runNow: 0.796ms
mainProcess: 8.201ms
I should run on worker2
Finish job2 with result: 15000
runWorker2: 1.21ms
{ codes: 5000 }
doHeavyStuff: 891.477ms
```