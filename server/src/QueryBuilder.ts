export class QueryBuilder {
  private selectColumns: string[] = [];
  private fromTables: string[] = [];
  private whereClauses: string[] | null = null;
  private groupByColumns: string[] | null = null;
  private orderByClauses: string[] | null = null;
  private offsetValue = 0;
  private limitValue: number | null = null;

  select(selectColumns: string[] | string) {
    if (typeof selectColumns === 'string') {
      this.selectColumns.push(selectColumns);
    } else {
      this.selectColumns = selectColumns;
    }
    return this;
  }

  from(fromTables: string[]) {
    this.fromTables = fromTables;
    if (typeof fromTables === 'string') {
      this.fromTables.push(fromTables);
    } else {
      this.fromTables = fromTables;
    }
    return this;
  }

  where(whereClauses: string[] | string) {
    if (typeof whereClauses === 'string') {
      this.whereClauses
        ? this.whereClauses?.push(whereClauses)
        : (this.whereClauses = [whereClauses]);
    } else {
      this.whereClauses = whereClauses;
    }
    return this;
  }

  groupBy(groupByColumns: string[] | string) {
    if (typeof groupByColumns === 'string') {
      this.groupByColumns
        ? this.groupByColumns?.push(groupByColumns)
        : (this.groupByColumns = [groupByColumns]);
    } else {
      this.groupByColumns = groupByColumns;
    }
    return this;
  }

  orderBy(orderByClauses: string[] | string) {
    if (typeof orderByClauses === 'string') {
      this.orderByClauses
        ? this.orderByClauses?.push(orderByClauses)
        : (this.orderByClauses = [orderByClauses]);
    } else {
      this.orderByClauses = orderByClauses;
    }
    return this;
  }

  offset(offsetValue: number) {
    this.offsetValue = offsetValue;
    return this;
  }

  limit(limitValue: number) {
    this.limitValue = limitValue;
    return this;
  }

  buildQuery() {
    return `
        select ${this.selectColumns.join(', ')}
        from ${this.fromTables.join(' ')}
        ${this.whereClauses ? 'where ' + this.whereClauses.join(' and ') : ''}
        ${
          this.groupByColumns
            ? 'group by ' + this.groupByColumns.join(', ')
            : ''
        }
        ${
          this.orderByClauses
            ? 'order by ' + this.orderByClauses.join(', ')
            : ''
        }
        offset ${this.offsetValue}
        ${this.limitValue ? 'limit ' + this.limitValue : ''}
      `;
  }
}
