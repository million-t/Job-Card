import React from 'react';

interface JobPost {
    title: string;
    description: string;
    requirements: string[];
}

interface JobPostProps {
    jobPost: JobPost;
}

const JobPostPage: React.FC<JobPostProps> = ({ jobPost }) => {
    return (
        <div>
            <h1>{jobPost.title}</h1>
            <p>{jobPost.description}</p>
            <h3>Requirements:</h3>
            <ul>
                {jobPost.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobPostPage;