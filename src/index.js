const { app } = require('./app');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/courses', function (req, res) {

    let courses = [
        {
            img: 'carousel-1',
            name: 'Human Resource Management',
            desc: `Unlock the power of effective human resource management with our comprehensive online
            course.Designed for HR professionals, managers, and anyone interested in mastering
            HRM fundamentals, this course covers essential topics to equip you with the
            knowledge and skills needed to excel in managing people within organizations.`,
            link: '/courses/course-details/human-resource',
        },
        {
            img: 'carousel-2',
            name: 'Digital Marketing',
            desc: `Through engaging video lessons, hands-on exercises, and real-world case studies,
            you'll delve into key digital marketing pillars such as search engine optimization
            (SEO), social media marketing, email marketing, content strategy, and analytics.
            Learn how to craft compelling digital campaigns, optimize your online presence, and
            drive meaningful results for your business or clients.`,
            link: '/courses/course-details/digital-marketing',
        },
        {
            img: 'carousel-3',
            name: 'Financial Literacy',
            desc: `Empower yourself with the knowledge and skills to make informed financial decisions
            with our online Financial Literacy Essentials course. Whether you're just starting
            your financial journey or seeking to enhance your money management skills, this
            course is your pathway to financial empowerment.`,
            link: '/courses/course-details/financial-literacy',
        },
        {
            img: 'carousel-4',
            name: 'Full Stack Developer',
            desc: `Embark on a transformative journey into the world of web development with our
            comprehensive Full Stack Developer Bootcamp. Whether you're a seasoned programmer
            looking to expand your skillset or a newcomer to the field, this course is your
            gateway to mastering the art of full stack development.`,
            link: '/courses/course-details/developer',
        },
    ];
    res.render('courses', { courses });
    // res.json(courses);

});

app.get('/courses/course-details/:id', function (req, res) {

    let details = [
        {
            name: 'Human Resource',
            desc: `Unlock the power of effective human resource management with our comprehensive online course.Designed for HR professionals, managers, and anyone interested in mastering HRM fundamentals, this course covers essential topics to equip you with the knowledge and skills needed to excel in managing people within organizations.`,
        },
        {
            name: 'Digital Marketing',
            desc: `Through engaging video lessons, hands-on exercises, and real-world case studies,you'll delve into key digital marketing pillars such as search engine optimization (SEO), social media marketing, email marketing, content strategy, and analytics.Learn how to craft compelling digital campaigns, optimize your online presence, and drive meaningful results for your business or clients.`,
        },
        {
            name: 'Financial Literacy',
            desc: `Empower yourself with the knowledge and skills to make informed financial decisions with our online Financial Literacy Essentials course. Whether you're just starting your financial journey or seeking to enhance your money management skills, this course is your pathway to financial empowerment.`,
        },
        {
            name: 'Full Stack Developer',
            desc: `Embark on a transformative journey into the world of web development with our comprehensive Full Stack Developer Bootcamp. Whether you're a seasoned programmer looking to expand your skillset or a newcomer to the field, this course is your gateway to mastering the art of full stack development.`,
        },
    ];
    res.render('course-details', { id: req.params.id, details });
    // res.json(courses);
});




app.listen(6700, function () {
    console.log('Server running on: http://localhost:6700/');
});
