package com.todotasks.todotasks.service;

public class Obj {
    String name;
    String id;

    public Obj() { }

    public Obj(String name, String id) {
        this.name = name;
        this.id = id;
    }

    public Obj(String name ){
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}

