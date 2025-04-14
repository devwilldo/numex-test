import {test, expect} from '@playwright/test';

test.describe('CONTACTS ',()=>{
    test.describe('valid tests',()=>{
        test.describe('EMPLOYEES',()=>{
            test('Add EMPLOYEE',async({page})=>{
                
            });
            test('UPLOAD EMPLOYEES', async({page})=>{

            });
            test('FILTER EMPLOYEES USING DEPARTMENT',async({page})=>{

            })
        });
        test.describe('CUSTOMERS',()=>{
            test('ADD CUSTOMER',async({page})=>{
                
            });
            test('UPLOAD CUSTOMER LIST', async({page})=>{

            });
            test('FILTER EMPLOYEES USING CUSTOMER KIND',async({page})=>{

            })
        });
        test.describe('Suppliers',()=>{
            test('ADD SUPPLIERS',async({page})=>{
                
            });
            test('UPLOAD SUPPLIERS', async({page})=>{

            });
            test('FILTER EMPLOYEES USING VENDOR KIND',async({page})=>{

            })
        });
        
    });
    test.describe('Invalid tests',()=>{

    })
})