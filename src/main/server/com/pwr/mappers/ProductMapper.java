package com.pwr.mappers;

import com.pwr.model.ProductEntity;
import com.pwr.model.ProductTO;

/**
 * Created by Magda Zielonka on 18.05.2017.
 */
public class ProductMapper {

    private ProductMapper() {
    }

    public static ProductTO mapProduct(ProductEntity productEntity){
        ProductTO product = new ProductTO();
        product.setId(productEntity.getId());
        product.setFresh(productEntity.getFresh());
        product.setInsertDate(productEntity.getInsertDate());
        product.setExpireDate(productEntity.getExpireDate());
        product.setQuantity(productEntity.getQuantity());
        product.setProductBase(ProductBaseMapper.mapProductBase(productEntity.getProductBaseEntity()));
        return product;
    }

    public static  ProductEntity mapProduct(ProductTO productTO){
        ProductEntity product = new ProductEntity();
        product.setId(productTO.getId());
        product.setInsertDate(productTO.getInsertDate());
        product.setExpiretDate(productTO.getExpireDate());
        product.setProductBaseEntity(ProductBaseMapper.mapProductBase(productTO.getProductBase()));
        product.setQuantity(productTO.getQuantity());
        product.setFresh(productTO.getFresh());
        return product;
    }
}
