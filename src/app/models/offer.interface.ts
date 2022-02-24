export interface OfferModel {
    id: number;
    url: string;
    title: string;
    company_name: string;
    category: string;
    tags: Array<string>;
    job_type: string;
    publication_date: string;
    candidate_required_location: string;
    salary: string;
    description: string;
    company_logo_url?: string
}

export interface ApiResponse {
    '0-legal-notice': string
    'job-count': number
    jobs: OfferModel[]
}