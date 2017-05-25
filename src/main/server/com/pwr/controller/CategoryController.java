package com.pwr.controller;

import com.pwr.repository.CategoryRepository;
import com.pwr.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Magda Zielonka on 18.05.2017.
 */
@RestController
@RequestMapping(path = "category")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private CategoryRepository categoryRepository;
}
