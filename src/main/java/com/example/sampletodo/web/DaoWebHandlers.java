package com.example.sampletodo.web;

import java.util.List;
import java.util.Map;

import com.britesnow.snow.util.JsonUtil;
import com.britesnow.snow.util.ObjectUtil;
import com.britesnow.snow.web.param.annotation.PathVar;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebDelete;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.example.sampletodo.web.WebResponse;
import com.example.sampletodo.dao.DaoRegistry;
import com.example.sampletodo.dao.IDao;
import com.example.sampletodo.entity.BaseEntity;
import com.example.sampletodo.util.JSONOptions;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
@SuppressWarnings({ "rawtypes", "unchecked" })
public class DaoWebHandlers {

    private DaoRegistry      daoRegistry;

    @Inject
    public DaoWebHandlers(DaoRegistry daoRegistry) {
        this.daoRegistry = daoRegistry;
    }

    @WebGet("/api/daoGet")
    public WebResponse daoGet(@WebParam("objType") String objType, @WebParam("obj_id") Long id) {
        IDao dao = daoRegistry.getDao(objType);
        try {
            Object obj = dao.get(id);
            return WebResponse.success(obj);
        } catch (Throwable t) {
            return WebResponse.fail(t);
        }
    }

    @WebGet("/api/daoList")
    public WebResponse daoList(@WebParam("objType") String objType, @WebParam("opts") String jsonOpts) {
        IDao dao = daoRegistry.getDao(objType);
        
        JSONOptions opts = new JSONOptions(jsonOpts);
        
        try {
            List<Object> list = dao.list(opts.getPageIndex(), opts.getPageSize(), 
                opts.getMatchMap(), opts.getOrderBy(), opts.getOrderType());
            return WebResponse.success(list);
        } catch (Throwable t) {
            return WebResponse.fail(t);
        }
        
    }

    @WebPost("/api/daoSave")
    public WebResponse daoSave(@WebParam("objType") String objType, @WebParam("obj_id") Long id,
                            @WebParam("objJson") String jsonObj) {
        System.out.println("--------objType:"+objType);
        System.out.println(jsonObj);
        Map jsonMap = JsonUtil.toMapAndList(jsonObj);
        IDao dao = daoRegistry.getDao(objType);
        Object obj = dao.get(id);
        if (obj == null) {
            obj = daoRegistry.getEntityInstance(objType);
        }
        
        try {
            ObjectUtil.populate(obj, jsonMap);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        try {
            obj = dao.save(obj);
            return WebResponse.success(obj);
        } catch (Throwable t) {
        	return WebResponse.fail(t);
        }
        
    }

    @WebDelete("/api/daoDelete-{id}")
    public WebResponse daoDelete(@WebParam("objType") String objType, @PathVar("id") Long id) {
        IDao dao = daoRegistry.getDao(objType);
        try {
            BaseEntity entity = (BaseEntity) dao.get(id);
            dao.delete(entity);
            return WebResponse.success(id);
        } catch (Throwable t) {
            return WebResponse.fail(t);
        }
        
    }

}
