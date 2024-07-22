package com.todotasks.todotasks.service;

import java.util.Optional;

public class Practice {

    public static void main(String[] args) throws Exception {
        Obj name = null;
        Obj name2 = new Obj("kyle");
//        if (name2.getName().equals("kyle")) System.out.println("true");
//        String s = Optional.ofNullable(name2.getName()).orElseGet(()-> {
//            System.out.println("null value");
//            return "id";
//        })
        Obj s = Optional.ofNullable(name).orElseThrow(Exception::new);



//        System.out.println(s);

    }
}


