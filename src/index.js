import './index.scss';

(function () {
    const transform = (element, value) => {
        element.style.transform = value;
    }

    const width = 300,
        height = 350,
        greenColors = [
            '#9EE4B', '#0A6030', '#0C783C', '#0F964B',
            '#13BC5E', '#42C97E', '#68D498', '#86DDAD'
        ].reverse(),
        types = ['text', 'text', 'text', 'text', 'progress'],
        stages = [
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
            "Mobile Design", "Android", "Swift", "Xamarin",
            "Ionic", "PhoneGap Cordova", "Java", "Java EE",
            "JSF", "Primefaces", "Struts2", "Spring", "Vaadin", "OSGi",
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
    const quantity = stages.length;
    const orderedStages = stages.sort((a, b) => a.length - b.length);
    const heigthStack = height / quantity;
    const colorStack = quantity / greenColors.length;

    const tree = document.querySelector('.tree'),
        treeRotation = 0;

    tree.style.width = width + 'px';
    tree.style.height = height + 'px';

    window.addEventListener('resize', resize, false);

    // The tree
    for (let i = 0; i < quantity; i++) {
        let element = null,
            type = types[Math.floor(Math.random() * types.length)],
            stage = orderedStages[i]; //stages[Math.floor(Math.random() * stages.length)];

        let x = width / 2,
            //y = Math.round(Math.random() * height);
            y = i * heigthStack;
        let backcolor = greenColors[Math.floor(i / colorStack)];

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
                element.innerHTML = stage;
                element.style.width = elemenWidth + 'px';
                element.style.height = elemenHeight + 'px';
                element.style.backgroundColor = backcolor;
        }

        element.className = "branch";
        transform(element, 'translate3d(' + x + 'px, ' + y + 'px, 0px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');

        tree.appendChild(element);
    }

    const resize = () => {
        tree.style.top = ((window.innerHeight - height - 100) / 2) + 'px';
    }

    resize();

})()