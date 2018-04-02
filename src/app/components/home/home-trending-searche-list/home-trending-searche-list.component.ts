import {Component, OnInit} from '@angular/core';
import {TrendingSearchesService} from '../../../services/trending-searches/trending-searches.service';
import {Observable} from 'rxjs/Observable';
import {Trend} from '../../../models/trend';
import {AnalyticsService} from '../../../services/analytics/analytics.service';

@Component({
    selector: 'app-home-trending-searches',
    templateUrl: './home-trending-searche-list.component.html',
    styleUrls: ['./home-trending-searche-list.component.scss']
})
export class HomeTrendingSearcheListComponent implements OnInit {
    trendingResults$: Observable<Trend[]>;

    constructor(private trendingSearches: TrendingSearchesService,
                private analytics: AnalyticsService) {
        this.trendingResults$ = this.trendingSearches.getTrendResults();
    }

    ngOnInit() {
        setTimeout(() => {
            this.trendingSearches.getTrends();
        }, 1);
    }

    onClick(number: number) {
        this.analytics.click('home-trending-search', number.toString());
    }
}
