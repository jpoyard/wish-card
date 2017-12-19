import './index.css';

(function () {
    const transform = (element, value) => {
        element.style.transform = value;
    }

    const width = 600,
        height = 700,
        types = ['text', 'text', 'text', 'progress'],
        greetings = [
            "Agilité", "Scrum", "Kanban", "TDD",
            "Software Craftsmanship", "UML", "SysML",
            "Enterprise Architect",
            "Web Oriented Architecture",
            "REST", "GraphQL", "SOA", "Web Services",
            "Big Data", "MongoDB", "Cassandra",
            "Hadoop", "Redis", "Neo4j", "Machine Learning",
            "Solr", "Elastic Search", "PostgreSQL", "MySQL",
            "HTML5", "SEO", "UX Design", "JavaScript", "TypeScript",
            "VueJS", "NodeJS", "AngularJS", "Angular", "ReactJS",
            "Mobile Design", "Android", "Kotlin",
            "Swift", "Xamarin", "Ionic", "PhoneGap Cordova",
            "Java", "Java EE", "JSF", "Primefaces",
            "Struts2", "Spring", "Vaadin", "OSGi",
            "Eclipse RCP", "JPA", "Hibernate", "Birt", "Liferay",
            "Smalltalk", "Kotlin", "C++", "C#", "Python", "Go",
            "Groovy & Grails", "Drools", "XML", "XSLT",
            "Intégration continue", "Subversion", "Git",
            "Ant", "Maven", "Gradle", "Jenkins", "DevOps",
            "Docker", "Kubernetes", "Chef", "Puppet",
            "Ansible", "Tests", "Jmeter", "JUnit", "SoapUI",
            "Websphere", "Wildfly", "Jboss",
            "Weblogic", "GlassFish", "Tomcat"
        ];
    const quantity = greetings.length;

    const tree = document.querySelector('.tree'),
        treeRotation = 0;

    tree.style.width = width + 'px';
    tree.style.height = height + 'px';

    window.addEventListener('resize', resize, false);

    // The tree
    for (let i = 0; i < quantity; i++) {
        let element = null,
            type = types[Math.floor(Math.random() * types.length)],
            greeting = greetings[Math.floor(Math.random() * greetings.length)];

        let x = width / 2,
            y = Math.round(Math.random() * height);

        let rx = 0,
            ry = Math.random() * 360,
            rz = -Math.random() * 15;

        let elemenWidth = 5 + ((y / height) * width / 2),
            elemenHeight = 26;

        switch (type) {
            case 'progress':
                element = document.createElement('progress');
                element.style.width = elemenWidth + 'px';
                break;
            case 'text':
            default:
                element = document.createElement('div');
                element.innerText = greeting;
                element.style.width = elemenWidth + 'px';
                element.style.height = elemenHeight + 'px';
        }

        element.className = "branch";
        transform(element, 'translate3d(' + x + 'px, ' + y + 'px, 0px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');

        tree.appendChild(element);
    }

    // The snow
    for (var i = 0; i < 200; i++) {
        var element = document.createElement('input');
        element.setAttribute('type', 'radio');

        var spread = width * 2;

        var x = Math.round(Math.random() * spread) - (spread / 4),
            y = Math.round(Math.random() * height),
            z = Math.round(Math.random() * spread) - (spread / 2);

        var rx = 0,
            ry = Math.random() * 360,
            rz = 0;

        if (Math.random() > 0.5) element.setAttribute('checked', '');

        transform(element, 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');

        tree.appendChild(element);
    }

    const resize = () => {
        tree.style.top = ((window.innerHeight - height - 100) / 2) + 'px';
    }

    resize();

})()