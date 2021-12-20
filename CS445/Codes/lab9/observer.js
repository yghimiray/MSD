// This is an observer design pattern 

class Observer {
    observers = {};

    subscribe(event, fn) {
        if (!this.observers[event]) {
            this.observers[event] = [fn];
        } else {
            this.observers[event].push(fn);
        }
    }

    emit(event, msg) {
        if (this.observers[event]) {
            this.observers[event].forEach(fn => fn(msg));
        }
    }

    unsubscribe(event, fn) {
        this.observers[event] = this.observers[event].filter(f => f !== fn);
    }
}


function f1(msg) {
    console.log("First :" + msg);
}


function f2(msg) {
    console.log("Second :" + msg);
}

const observ = new Observer();
observ.subscribe("eat", f1);
observ.subscribe("eat", f2);
observ.subscribe("study", f1);
observ.subscribe("study", f2);

// observ.emit("eat", "corn");
// observ.emit("study", "book");

observ.unsubscribe("eat",f1);

observ.emit("eat", "corn");
observ.emit("study", "book");
