describe('Login page', () => {

    it.only('Observe to read', () => {
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('a[onclick="showEditRow(\'ammarshtayeh\')"]').click({force: true})
         cy.get('select[name="permissions_Observe"]').select('Read');
         cy.get('button[type="submit"]').contains('Save').click( {force: true});
         cy.get('a.nav-link[href="/staff/48/goals/"]').click();
         cy.get('button.btn-submit').should('not.exist');
 
     });
 
     it.only(' Goals to read ', () => {
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('a[onclick="showEditRow(\'ammarshtayeh\')"]').click({force: true});
         cy.get('select[name="permissions_Goals"]').select('Read');
         cy.get('button[type="submit"]').contains('Save').click( {force: true});
         cy.get('a.nav-link[href="/staff/48/goals/"]').click();
         cy.get('a.nav-link[href="/staff/48/goals/"]').contains('Add Goal').should('not.exist');
 
 
     });
     it.only('Observe to N/A', () => {
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('a[onclick="showEditRow(\'ammarshtayeh\')"]').click({force: true})
         cy.get('select[name="permissions_Observe"]').select('N/A');
         cy.get('button[type="submit"]').contains('Save').click( {force: true});
         cy.get('a.nav-link[href="/staff/48/goals/"]').click();
         cy.get('a.nav-link[href="#observe_goals_container"]').should('not.exist');
 
     });
 
     it.only('Goals to N/A', () => {
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('a[onclick="showEditRow(\'ammarshtayeh\')"]').click({force: true});
         cy.get('select[name="permissions_Goals"]').select('N/A');
         cy.get('button[type="submit"]').contains('Save').click( {force: true});
         cy.get('a.nav-link[href="/staff/48/goals/"]').click();
         cy.get(".container-fluid").contains("You do not have permission on this module.").should("exist")
       
     });
    
 
     it.only('Goals to write', () => {
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('a[onclick="showEditRow(\'ammarshtayeh\')"]').click({force: true});
         cy.get('select[name="permissions_Goals"]').select('Write');
         cy.get('button[type="submit"]').contains('Save').click( {force: true});
         cy.reload();
         cy.get('a.nav-link[href="/staff/48/goals/"]').click();
         cy.get('a.nav-link[href="#add_goals_container"]').contains('Add Goal').should('exist');
       
     });
     it.only('Observe to write', () => {
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('a[onclick="showEditRow(\'ammarshtayeh\')"]').click({force: true})
         cy.get('select[name="permissions_Observe"]').select('Write');
         cy.get('button[type="submit"]').contains('Save').click( {force: true});
         cy.get('a.nav-link[href="/staff/48/goals/"]').click();
         cy.get('button[type="button"]').contains('Unobserve').should('exist');        
     });
 
     it.only("Add Staff", () => { 
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('#new_staff').type("Raghad");
         cy.get('button[type="button"]').contains('Add staff').click( {force: true});
         cy.get('#staff_Raghad').should('exist');
       });
 
       it.only("Search Staff", () => { 
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('#staffs_filter input[type="search"]').type('Raghad');
         cy.get('table').find('td').contains("Raghad").should('exist')
       });
 
       it.only("Cancel Staff", () => { 
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('a[onclick="showEditRow(\'Raghad\')"]').click({force: true})
         cy.get('a[data-href="Raghad"][data-target="#confirm-delete"]').should('exist').click({force: true});
         cy.get('#confirm-delete').should('exist');
         cy.get('button[type="button"].btn-default[data-dismiss="modal"]').contains("Cancel").click();
         cy.get('table').find('td').contains("Raghad").should('exist')
       });
       it.only("Remove Staff", () => { 
         cy.visit('https://goal-dev.mdx.ac.uk/accounts/login/?next=/');
         cy.get('#id_username').type('ammarshtayeh');
         cy.get('#id_password').type('ammarking');
         cy.get('select').select('staff');
         cy.get('button[type="submit"]').contains('Login').click();
         cy.get('a.nav-link[href="/staff/48"]').click();
         cy.get('a.nav-link[href="/staff/48/staffs/"]').click();
         cy.get('a[onclick="showEditRow(\'Raghad\')"]').click({force: true})
         cy.get('a[data-href="Raghad"][data-target="#confirm-delete"]').should('exist').click({force: true});
         cy.get('#confirm-delete').should('exist');
         cy.get('a[href="/staff/48/delete/staff/Raghad"]').should('exist').contains("Remove").click({force: true});
         cy.get('table').find('td').contains("Raghad").should('not.exist')
       });
       
     
 
 
 });
 