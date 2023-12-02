### Initial glossary

- thread - A thread is defined in the operating system level. A thread is a set of instructions. Multiple threads can be executed at the same time.
- "at the same time" - Tasks that are running in parallel. Non blocking. Taking advantage of the multiple cores in a CPU.
- scheduler - Responsible for resource sharing of the CPU. Takes into account of priority of the tasks.
- race condition - Two different threads are trying to read and write the same variable at the same time.
  - Example: 2 Threads (T1, T2) are accessing a Singleton. The thread that accessed later, will create a new Singleton.
- synchronization - Prevents a block of code to be executed by more that one thread at the same time.

```java
public class Singleton {

    private static Singleton instance;
    private Singleton() {} // private constructor

    public static synchronized Singleton getInstance() { //aka lock-key
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

With synchronized, T2 will have to wait for T1 to finish accessing the `getInstance()` method.
