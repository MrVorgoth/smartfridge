package com.pwr.model;

/**
 * Created by Magda Zielonka on 18.05.2017.
 */
public class CategoryTO {

    private Long id;

    private String name;

    private String imageURL;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}
